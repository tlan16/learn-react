const merge = require('webpack-merge')
const { HotModuleReplacementPlugin } = require('webpack')
const common = require('./webpack.common.js')

const plugins = [
  new HotModuleReplacementPlugin(),
]

const devServer = {
  bonjour: true,
  hot: true,
  host: '0.0.0.0',
  historyApiFallback: true,
  open: true,
}

const optimization = {
}

module.exports = merge(common, {
  mode: 'development',
  plugins,
  devtool: 'source-map',
  devServer,
  optimization,
})
