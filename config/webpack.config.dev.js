const resolvePath = require("./resolvePath");
const path = require("path")
module.exports = {
    mode: "development",
    devtool: 'source-map',
    devServer: {
        progress:true,
        historyApiFallback: false,
        hot: true,
        port: 8080
    }
}