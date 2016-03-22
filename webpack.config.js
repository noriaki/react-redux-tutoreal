'use strict';

const path = require('path');
module.exports = {
  entry: './components/app.jsx',
  output: {
    path: path.resolve('./build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: { presets: ['react', 'es2015'] }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
