const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.common.js')

const plugins = [
  new BundleAnalyzerPlugin(),
]

const optimization = {
  splitChunks: {
    chunks: 'all',
  },
}

module.exports = merge(common, {
  mode: 'production',
  plugins,
  optimization,
})
