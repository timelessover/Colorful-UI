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
        collapsable: true,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/slides',
        ]
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
