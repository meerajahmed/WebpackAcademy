
// ExtractTextWebpackPlugin is both a loader and plugin
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");


const config = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: "css-loader",
          fallback: "style-loader" // for lazy loaded bundled
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin("style.css"),
    new UglifyJsWebpackPlugin({
      sourceMap: true //don't strip off source map comments at the end of file
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.0
    })
  ]
};

module.exports = config;