const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const _ = require('lodash');

module.exports = {
  entry: {js: './src/index', vendor: _.keys(pkg.dependencies)},
  output: {path: path.join(__dirname, 'dist'), filename: 'bundle.js'},
  plugins: [
    new webpack.DefinePlugin({
      '__DEV__': false,
      'process.env': {'NODE_ENV': JSON.stringify('production')}
    }),
    new webpack.optimize.UglifyJsPlugin(
        {compressor: {warnings: false}, output: {comments: false}}),
    new webpack.optimize.CommonsChunkPlugin(
        {name: 'vendor', minChunks: Infinity, filename: 'vendor.bundle.js'}),
    new HtmlWebpackPlugin({
      template: 'index.html',  // Load a custom template
      inject: 'body',          // Inject all scripts into the body
      hash: true
    })
  ],
  module: {
    rules: [
      {test: /\.js|\.jsx?$/, use: [{loader: 'babel-loader'}]}, {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'src/styles/global'),
        use: [
          {loader: 'style-loader'}, {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]-[hash:base64:5]'
            }
          }
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/styles/global'),
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: {limit: 8192, name: 'images/[hash:8].[name].[ext]'}
        }]
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx']
  }
};
