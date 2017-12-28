const commonPaths = require("path");

module.exports = {
  // __dirname is absolute path of current dir
  outputPath: commonPaths.resolve(__dirname, "../", "dist")
};