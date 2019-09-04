const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const javascriptLoader = {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
  },
}

const styleLoader = {
  test: /\.css$/,
  use: [
    'style-loader',
  ],
}

const imageLoader = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
    },
  ],
}

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin(),
  new Dotenv(),
]

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      javascriptLoader,
      styleLoader,
      imageLoader,
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins,
  devtool: 'eval-source-map',
}
