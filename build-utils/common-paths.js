const commonPaths = require("path");

module.exports = {
  appEntry: "./src/",
  // __dirname is absolute path of current dir
  outputPath: commonPaths.resolve(__dirname, "../", "dist")

};