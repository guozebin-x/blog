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
        text: '前端',
        link: '/frontend/js-basis/data-type.html',
      },
      {
        text: 'JAVA',
        link: '/java/',
      },
      {
        text: '运维',
        link: '/linux/',
      },
      {
        text: '算法',
        link: '/algorithm/',
      },
      {
        text: '关于',
        link: '/about/'
      },
      { text: 'GitHub', link: 'https://github.com/guozebin-x' }
    ],
    sidebar: {
      '/frontend/': [
        {
          title: 'CSS基础',
          collapsable: true,
          children: [
            'css/document-flow',
            'css/bfc',
            'css/clear-float',
          ]
        },
        {
          title: 'CSS进阶',
          collapsable: true,
          children: [
            'css/document-flow',
            'css/bfc',
            'css/clear-float',
          ]
        },
        {
          title: 'JavaScript基础',
          collapsable: true,
          children: [
            'js-basis/data-type',
            'js-basis/declare-ascension',
            'js-basis/deep-copy',
            'js-basis/this-point',
            'js-basis/prototype-chain',
            'js-basis/closure',
            'js-basis/event-loop',
            'js-basis/inheritance',
            'js-basis/tail-call'
          ]
        },
        {
          title: 'JavaScript进阶',
          collapsable: true,
          children: [
            'js-basis/data-type',
            'js-basis/declare-ascension',
            'js-basis/deep-copy',
            'js-basis/this-point',
            'js-basis/prototype-chain',
            'js-basis/closure',
            'js-basis/event-loop',
            'js-basis/inheritance',
            'js-basis/tail-call'
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
      ],
      '/blog/': [
        {
          title: 'Blog',
          collapsable: false,
          children: [
            'git'
          ]
        }
      ],
      '/english/': [
        {
          title: 'English learning ',
          collapsable: false,
          children: [
            'taiji-grammar'
          ]
        }
      ],
    }
  }
}