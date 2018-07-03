/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
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
]

module.exports = {
  entry: {
    'babel-polyfill': 'babel-polyfill',
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
}
