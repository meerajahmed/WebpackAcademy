const commonConfig = require("./build-utils/webpack.common");
// webpack merge is similar to Object.assign but gives us very order specific and webpack specific features
// that lets you merge configurations and arrays in correct order together
const webpackMerge = require("webpack-merge");

// addons lets you test different experimental features without effecting normal env configs
// we can pass array of addons through scripts
// ex: npm run build:dev -- --env.addons=bundlebuddy --env.addons=bundleanalyzer
// here bundlebuddy and bundleanalyzer are two addons that needs to be merged later
const addons = (addonsArg) => {
  let addons = []
    .concat.apply([], [addonsArg]) // Normalize aray of addons (flattens)
    .filter(Boolean); // if addons are undefined, filter it out

  return addons.map((addonName) => require(`./build-utils/addons/webpack.${addonName}`));
};

module.exports = (env) => {
  console.log(env);
  const envConfig = require(`./build-utils/webpack.${env.env}`);
  // webpackMerge -> baseConfig, decorate on top of it
  const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons));
  console.log(mergedConfig);
  return mergedConfig;
};
