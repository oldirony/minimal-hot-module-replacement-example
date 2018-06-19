const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    "webpack-hot-middleware/client",
    path.join(__dirname,"src/client.js")
  ],
  mode: 'development',
  output: {
    publicPath: "/public/",
    path: path.join(__dirname, "public/"),
    filename: "app.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}