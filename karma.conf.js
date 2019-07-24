const webpackConfig = require('./build/webpack.test.conf')

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha','chai'],

    files: [
      'test/*.test.js'
    ],

    exclude: [
    ],
    
    // 测试文件添加中间件处理
    preprocessors: {
      'test/*.test.js': ['webpack']
    },

    webpack: webpackConfig,

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
}