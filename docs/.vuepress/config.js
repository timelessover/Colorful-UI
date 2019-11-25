const path = require('path')
module.exports = {
  base: '/Colorful-UI/',
  title: 'Colorful-UI',
  description: '一个专注体验的UI框架',
  port:8085,
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/get-started/'},
      { text: '交流', link: 'https://github.com/timelessover/Colorful-UI/issues' },
      { text: 'GitHub', link: 'https://github.com/timelessover/Colorful-UI'}
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/layout',
          '/components/container',
          '/components/toast',
          '/components/popover',
          '/components/backtop',
        ]
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../../../src/components'
      }
    }
  }
  
}
