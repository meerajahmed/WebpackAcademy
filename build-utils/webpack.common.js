const path = require("./common-paths");
const config = {
  // entry: first file webpack starts at when it creates dependency graph
  entry: "./src/",
  // output: how and where to put the bundles and how to format them
  output: {
    // bundle.js has webpack run time code which enables browsers to run module in browser
    filename: "bundle.js",
    path: path.outputPath
  }
};

module.exports = config;