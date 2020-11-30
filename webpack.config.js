const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  stats: 'normal',
  devtool: 'inline-source-map',
  entry: {
    main: path.resolve(__dirname, 'src/components/index'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
