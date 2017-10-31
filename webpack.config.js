const path = require('path');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname,'src/js'),
};

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(paths.JS, 'app.jsx'),
  ],
  output: {
    path: paths.DIST,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: true,
};



