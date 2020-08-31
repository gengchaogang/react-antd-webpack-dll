const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "production",
  devtool: false,
  module: {
    rules: [
      {
        //antd样式处理
        test: /\.css|less$/,
        exclude: /src/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          },
        ]
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
            options: {
              lessOptions: { javascriptEnabled: true }
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash:4].css",
      chunkFilename: "chunk/[name]/[name]-[hash:4].css",
    }),
  ]
}