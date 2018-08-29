module.exports = {
  title: 'evan\'s blog',
  base: '/',
  themeConfig: {
    editLinkText: '编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: 'JS',
        link: '/js/',
      },
      {
        text: 'LINUX',
        link: '/linux/',
      },
      {
        text: '说明',
        link: '/instructions/'
      },
      {
        text: '关于',
        link: '/about/'
      },
      { text: 'GitHub', link: 'https://github.com/vanoneang' }
    ],
    sidebar: {
      '/js/': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            '',
            'mobile-adaptive',
            'http',
            'made',
            'function',
            'the-little-knowledge',
            'basis',
            'closure',
            'async',
            'vue',
            'vue-jsonp',
            'azure-storage',
            'webpack'
          ]
        }
      ], 
      '/linux/':[
        {
          title: 'Linux',
          collapsable: true,
          children: [
            '',
            'nginx',
            'crontab',
            'git'
          ]
        }
      ]
    }
  }
}