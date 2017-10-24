const path = require('path');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
//  PUBLIC: path.resolve(__dirname, 'public'),
  JS: path.resolve(__dirname,'src/js'),
};

module.exports = {
  entry: path.join(paths.JS, 'app.js'),
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



