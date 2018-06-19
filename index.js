const path = require('path')
const express = require('express')
const app = express();
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig)

app.use(webpackDev(compiler, {
  filename: webpackConfig.output.filename,
  publicPath: webpackConfig.output.publicPath,
}))
app.use(webpackHot(compiler))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(3031)