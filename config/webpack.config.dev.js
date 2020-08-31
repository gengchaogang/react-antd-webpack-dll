const resolvePath = require("./resolvePath");
const path = require("path")
module.exports = {
  mode: "development",
  devtool: 'source-map',
  devServer: {
    progress: true,
    historyApiFallback: false,
    hot: true,
    port: 8080
  },
  module: {
    rules: [
      {
        //antd样式处理
        test: /\.css|less$/,
        exclude: /src/,
        use: [
          { loader: "style-loader" },
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
          { loader: "style-loader" },
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
      }
    ]
  }
}