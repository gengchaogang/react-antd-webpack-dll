const { merge } = require("webpack-merge");

let config;
let env = process.env.NODE_ENV.trim();

const devConfig = require("./webpack.config.dev");
const proConfig = require("./webpack.config.production");
const baseConfig = require("./webpack.config.base");

config =
  env === "development"
    ? merge(devConfig, baseConfig)
    : merge(baseConfig, proConfig);

module.exports = config;
