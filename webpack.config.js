var path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		// bundle.js has webpack run time code which enables browsers to run module in browser
		filename: "bundle.js",
		// __dirname is absolute path of current dir
		path: path.join(__dirname, "dist")
	}
}