const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.tsx'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HWP({
      template: path.join(__dirname, '/src/index.html'),
    }),
  ],
};
