module.exports = {
  theme: 'antdocs',
  title: '欢迎访问supengfei007.com',
  description: 'Happy coding',
  themeConfig: {
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Java', items: [{ text: 'JUnit', link: '/dev/junit_best_practice' },
        { text: 'Postman Auto Test', link: '/dev/TestWithPostman' },
        { text: 'CompeleteFuture NPE Issue', link: '/dev/compelete_future_with_npe' }]
      }, // 内部链接 以docs为根目录
      // 下拉列表
      { text: 'Useful Command', items: [{ text: 'code in one line', link: '/useful_shell/command' }] },
      {
        text: 'GitHub',
        items: [
          { text: 'pengfeis GitHub', link: 'https://github.com/pengfeis' },
          {
            text: '算法仓库',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          }
        ]
      }
    ]
  }
}