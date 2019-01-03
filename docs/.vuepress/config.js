module.exports = {
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/logo.png`
      }
    ],
  ],
  themeConfig: {
    editLinkText: '编辑此页',
    lastUpdated: '上次更新',
    logo: '/left-logo.png',
    nav: [
      {
        text: '大前端',
        link: '/frontend/js/build.html',
      },
      {
        text: 'LINUX',
        link: '/linux/',
      },
      {
        text: '关于',
        link: '/about/'
      },
      { text: 'GitHub', link: 'https://github.com/vanoneang' }
    ],
    sidebar: {
      '/frontend/': [
        {
          title: 'JavaScript',
          collapsable: true,
          children: [
            'js/build.html',
            'js/OAuth2.0',
            'js/hybrid',
            'js/mobile-adaptive',
            'js/http',
            'js/basic-knowledge',
            'js/senior-knowledge',
            'js/function',
            'js/the-little-knowledge',
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
            'node/basis',
            'node/koa'
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