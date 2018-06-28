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
          'node/basis'
        ]
      },
      {
        title: 'JavaScript',
        collapsable: false,
        children: [
          'js/the-little-knowledge',
          'js/basis',
          'js/closure',
          'js/async',
          'js/vue',
          'js/vue-jsonp',
          'js/azure-storage'
        ]
      },
      {
        title: 'linux',
        collapsable: false,
        children: [
          'linux/crontab'
        ]
      },
      {
        title: 'Reading notes',
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
          'life/english',
          'life/xian'
        ]
      }
      
    ]
  }
}