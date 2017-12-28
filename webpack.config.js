var path = require("path");
var ExamplePlugin = require("./ExamplePlugin");
// webpack custom plugin
var webpack = require("webpack");
module.exports = {
  // entry: first file webpack starts at when it creates dependency graph
  entry: "./src/index.js",
  // output: how and where to put the bundles and how to format them
  output: {
    // bundle.js has webpack run time code which enables browsers to run module in browser
    filename: "bundle.js",
    // __dirname is absolute path of current dir
    path: path.join(__dirname, "dist")
  },
  // loaders: performs some type of transformation on single file (input source) just before it is added to dependency graph
  // They help us treat any type of asset as module in dependency graph
  module: {
    // rules: how to treat file before they are added to the dependency graph
    rules: [
      {
        test: /\.png$/,
        use: ["file-loader"]
      }
    ]
  },
  // plugins: can perform any of the functionality that loaders could't
  // if we want perform any of the operation on multiple files
  plugins: [
    new ExamplePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};