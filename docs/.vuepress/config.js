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
      {
        text: '关于',
        link: '/about/'
      },
      { text: 'GitHub', link: 'https://github.com/vanoneang' }
    ],
    sidebar: [
      {
        title: 'JavaScript',
        collapsable: false,
        children: [
          'js/mobile-adaptive',
          'js/http',
          'js/made',
          'js/function',
          'js/the-little-knowledge',
          'js/basis',
          'js/closure',
          'js/async',
          'js/vue',
          'js/vue-jsonp',
          'js/azure-storage',
          'js/webpack'
        ]
      },
      {
        title: 'NodeJS',
        collapsable: true,
        children: [
          ['node/', 'koa2'],
          'node/basis'
        ]
      },
      {
        title: 'Linux',
        collapsable: true,
        children: [
          'linux/nginx',
          'linux/crontab',
          'linux/git',
          'linux/command'
        ]
      },
      {
        title: '读书笔记',
        collapsable: true,
        children: [
          ['books/', '前端工程化']
        ]
      },
      {
        title: '生活日记',
        collapsable: true,
        children: [
          'life/english',
          'life/xian',
          'life/resume'
        ]
      }
      
    ]
  }
}