const commonConfig = require("./build-utils/webpack.common");
// webpack merge is similar to Object.assign but gives us very order specific and webpack specific features
// that lets you merge configurations and arrays in correct order together
const webpackMerge = require("webpack-merge");
module.exports = (env) => {
  console.log(env);
  const envConfig = require(`./build-utils/webpack.${env.env}`);
  return webpackMerge(commonConfig, envConfig);
};
