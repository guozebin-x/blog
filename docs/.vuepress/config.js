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
        text: 'NODE',
        link: '/node/'
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
            'mobile-adaptive',
            'http',
            'basic-knowledge',
            'senior-knowledge',
            'function',
            'the-little-knowledge',
            'vue',
            'vue-jsonp',
            'azure-storage',
            'webpack'
          ]
        }
      ], 
      '/node/': [
        {
          title: 'NodeJS',
          collapsable: false,
          children: [
            'basis',
            'koa'
          ]
        }
      ],
      '/linux/':[
        {
          title: 'Linux',
          collapsable: false,
          children: [
            'nginx',
            'crontab',
            'git'
          ]
        }
      ]
    }
  }
}