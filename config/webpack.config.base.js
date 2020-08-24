const resolvePath = require("./resolvePath");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: resolvePath("../src/main.js"),
  output: {
    filename: "bundle[hash:4].js",
    chunkFilename: "chunk/[name]-[hash:4].chunk.js",
    path: resolvePath("../dist"),
  },
  optimization: {
    splitChunks: {
      // 该选项将用于配置 SplitChunksPlugin 插件
      minSize: 30000, // 模块的最小体积
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          minChunks: 1, //最少被引用几次  才会被分离到vendor
          priority: 1, //权重
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|less$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]-[name]-[hash:4]",
              },
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:4].css",
      chunkFilename: "[name].css",
    }),
    new webpack.DllReferencePlugin({
      manifest: resolvePath("../dll/vendor.manifest.json"),
    }),
    new HtmlWebpackPlugin({
      template: resolvePath("../src/public/index.html"),
      title: "reactApp",
      filename: "index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      },
    }),
    // 将文件自动引入到html中
    new AddAssetHtmlWebpackPlugin({
      filepath: resolvePath("../dll/vendor.dll.js"),
    }),
  ],
};
