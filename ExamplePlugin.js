class ExamplePlugin {
  apply(compiler){
    compiler.plugin("run", (compiler, callback) => {
      console.log("WEBPACK EXAMPLE PLUGING");
      callback();
    });
  }
}
module.exports = ExamplePlugin;