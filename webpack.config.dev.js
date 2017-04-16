const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${process.env.npm_package_config_host}:${process.env.npm_package_config_port}`,
    'webpack/hot/only-dev-server', './src/index.dev'
  ],
  output: {path: path.join(__dirname, 'dist'), filename: 'bundle.js'},
  plugins: [
    new webpack.DefinePlugin({'__DEV__': true}),
    new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',  // Load a custom template
      inject: 'body'           // Inject all scripts into the body
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
      }, {
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
