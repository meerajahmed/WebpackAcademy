// webpack manages every assets in out application by building dependency graph

import fooString from "./foo";
import bar from "./bar-cjs";
import "./webpack-logo-on-white-bg.png";

console.log(fooString, bar);
