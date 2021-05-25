const nav = require('./themeConfig/nav.js');
const sidebar = require('./themeConfig/sidebar.js');
const htmlModules = require('./themeConfig/htmlModules.js');

// 主题配置
module.exports = {
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/EB-logo.png', // 导航栏logo
  repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: false, // 启用编辑
  editLinkText: '编辑',

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'pengfeis', // 必需
    link: 'https://github.com/pengfeis', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
    name: 'Pengfei Su',
    slogan: 'Bug make machine',
  },
  social: {
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:894072666@qq.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/pengfeis',
      }
    ],
  },

  // 备案号
  record: '沪ICP备2021010046号-1',
  // 项目开始时间, 只填写年份
  startYear: '2021',

  footer: {
    // 页脚信息
    createYear: 2021, // 博客创建年份
    copyrightInfo:
      '<div style="width:300px;margin:0 auto; padding:20px 0;">沪ICP备2021010046号-1<a target="_blank" href="" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="/img/hugabn.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">沪公网安备 31011502017789号</p></a ></div>', // 博客版权信息，支持a标签
  },
  htmlModules // 插入hmtl(广告)模块
}
