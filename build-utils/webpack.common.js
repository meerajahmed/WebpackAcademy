const commonPath = require("./common-paths");
const webpack = require('webpack');
// generates boiler html in output path in bundle script included
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  // entry: first file webpack starts at when it creates dependency graph
  entry: commonPath.appEntry,
  // output: how and where to put the bundles and how to format them
  output: {
    // bundle.js has webpack run time code which enables browsers to run module in browser
    filename: "[hash]bundle.js",
    path: commonPath.outputPath
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        loader: "url-loader", // convert any assect URL into base-64
        options: {
          limit: 50000 // 50KB
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin() // makes it easy to inject chunkhash file. We dont have to mannualy update bundle file name in index.html
  ]
};

module.exports = config;