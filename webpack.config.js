

const path = require('path');

module.exports = {
  entry: {index:'./src/index.js',homepage: './src/homepage.js'},
  output: {
    filename: '[name]main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

