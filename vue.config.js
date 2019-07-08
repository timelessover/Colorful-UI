const path = require('path');

module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          css: path.join(__dirname, 'src/styles'),
        },
      },
    },
  };