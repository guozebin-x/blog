module.exports = {
  title: 'evan\'s blog',
  themeConfig: {
    sidebar: 'auto',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    head: [
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    serviceWorker: true,
    nav: [
      { text: 'GitHub', link: 'https://github.com/vanoneang' }
    ],
    sidebar: [
      {
        title: 'node',
        collapsable: false,
        children: [
          ['node/', 'koa2'],
          'node/vue'
        ]
      },
      {
        title: '书',
        collapsable: false,
        children: [
          ['books/', '前端工程化简史'],
          'books/cache'
        ]
      },
      {
        title: '生活',
        collapsable: false,
        children: [
          'life/xian',
          'life/english'
        ]
      },
      {
        title: 'linux',
        collapsable: false,
        children: [
          'linux/crontab'
        ]
      }
    ]
  }
}