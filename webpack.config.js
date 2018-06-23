const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const Dotenv = require('dotenv-webpack')

const javascriptLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
}

const styleLoader = {
  test: /\.css$/,
  use: [
    'style-loader',
  ],
}

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin(),
  new Dotenv(),
  new HotModuleReplacementPlugin(),
]

const devServer = {
  bonjour: true,
  compress: true,
  hot: true,
  https: true,
}

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      javascriptLoader,
      styleLoader,
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins,
  devtool: 'eval-source-map',
  devServer,
}
