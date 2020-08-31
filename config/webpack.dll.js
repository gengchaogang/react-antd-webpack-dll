const webpack = require("webpack");
const resolvePath = require("./resolvePath");

module.exports = {
  mode: "none",
  entry: {
    vendor: [
      "react",
      "react-dom",
      "react-router-dom",
      "antd",
      "redux",
      "react-redux",
    ],
  },
  output: {
    path: resolvePath("../dll"),
    filename: "[name].dll.js",
    library: "[name]_library",
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolvePath("../dll/[name].manifest.json"),
      name: "[name]_library",
    }),
  ],
};
