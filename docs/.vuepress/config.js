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
        title: 'Basic 基础组件',
        collapsable: false,
        children: [
          '/components/basic/button',
          '/components/basic/contanier',
          '/components/basic/layout',
        ]
      },
      {
        title: 'Form 表单组件',
        collapsable: false,
        children: [
          '/components/form/input',
        ]
      },
      {
        title: 'Data 数据展示组件',
        collapsable: false,
        children: [
          '/components/data/data',
        ]
      },
      {
        title: 'Navigation 导航组件',
        collapsable: false,
        children: [
          '/components/navigation/tabs',
        ]
      },
      {
        title: 'Notice 消息提示组件',
        collapsable: false,
        children: [
          '/components/notice/toast',
        ]
      },
      {
        title: 'Others 其他',
        collapsable: false,
        children: [
          '/components/others/popover',
          '/components/others/backTop',
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
