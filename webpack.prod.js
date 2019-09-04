const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js')

const optimization = {
  minimizer: [new TerserPlugin()],
  splitChunks: {
    chunks: 'all',
  },
}

module.exports = merge(common, {
  mode: 'production',
  optimization,
})
