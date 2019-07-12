const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "components": path.resolve(__dirname, "components"),
        "styles": path.resolve(__dirname,"styles")
      }
    }
  }
}