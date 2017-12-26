import fooString from "./foo";
import bar from "./bar-cjs";

console.log(fooString, bar);

// webpack manages every asset in out application by building dependency graph
// loaders -> transforms source