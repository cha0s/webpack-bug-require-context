const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './entry',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    modules: [
      __dirname + '/foobar',
    ],
  },
  stats: false,
};
