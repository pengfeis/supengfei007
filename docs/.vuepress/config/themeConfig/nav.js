// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'JVM',
    link: '/jvm/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
    ],
  },
  {
    text: '编程技巧',
    link: '/ui/',
    items: [
      { text: 'Diff List', link: '/pages/51343f/' },
      { text: '常用命令', link: '/pages/7f7aa1/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '面试', link: '/pages/c29461/' },
      { text: '生活实践', link: '/pages/f17bf9/' },
      { text: '旅行日记', link: '/pages/087e73/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
