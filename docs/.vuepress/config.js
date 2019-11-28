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
          '/components/form/radio',
          '/components/form/checkbox',
          '/components/form/input',
          '/components/form/inputnumber',
          '/components/form/cascader',
          '/components/form/switch',
          '/components/form/datePicker',
          '/components/form/upload',
        ]
      },
      {
        title: 'Data 数据展示组件',
        collapsable: false,
        children: [
          '/components/data/table',
          '/components/data/pagination',
        ]
      },
      {
        title: 'Notice 消息提示组件',
        collapsable: false,
        children: [
          '/components/notice/toast',
          '/components/notice/message-box',
        ]
      },
      {
        title: 'Navigation 导航组件',
        collapsable: false,
        children: [
          '/components/navigation/nav-menu',
          '/components/navigation/tabs',
          '/components/navigation/breadcrumb'
        ]
      },
      {
        title: 'Others 其他',
        collapsable: false,
        children: [
          '/components/others/popover',
          '/components/others/backTop',
          '/components/others/card',
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
