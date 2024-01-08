module.exports = {
  entry: {
    index: './entry',
  },
  resolve: {
    modules: [
      __dirname + '/foobar',
    ],
  },
  stats: false,
};
