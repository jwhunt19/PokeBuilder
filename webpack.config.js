const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /\.module\.css$/,
      },
    ],
  },
  // mode: 'development',
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};