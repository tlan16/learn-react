const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const optimization = {
  splitChunks: {
    chunks: 'all',
  },
}

module.exports = merge(common, {
  mode: 'production',
  optimization,
})
