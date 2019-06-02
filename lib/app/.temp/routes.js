import Vue from 'vue'
Vue.component("AboutLayout", () => import("/Users/evan/workspaces/blog/docs/.vuepress/components/AboutLayout.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-153f69411fb34",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/README.md").then(comp => {
        Vue.component("v-153f69411fb34", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-b6112c3e1813a",
    path: "/about/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/about/README.md").then(comp => {
        Vue.component("v-b6112c3e1813a", comp.default)
        next()
      })
    }
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-1b1f5d1123bc2",
    path: "/blog/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/blog/git.md").then(comp => {
        Vue.component("v-1b1f5d1123bc2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3bfb29ecf8666",
    path: "/books/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/books/index.md").then(comp => {
        Vue.component("v-3bfb29ecf8666", comp.default)
        next()
      })
    }
  },
  {
    path: "/books/index.html",
    redirect: "/books/"
  },
  {
    name: "v-50749ab00631d",
    path: "/books/sociopath.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/books/sociopath.md").then(comp => {
        Vue.component("v-50749ab00631d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-21dcfa2006873",
    path: "/english/base.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/base.md").then(comp => {
        Vue.component("v-21dcfa2006873", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fd67a89956b65",
    path: "/english/spell.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/spell.md").then(comp => {
        Vue.component("v-fd67a89956b65", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f5abb9d422711",
    path: "/english/taiji-grammar.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/taiji-grammar.md").then(comp => {
        Vue.component("v-f5abb9d422711", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e064484fbeb75",
    path: "/frontend/js/OAuth2.0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/OAuth2.0.md").then(comp => {
        Vue.component("v-e064484fbeb75", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5cf0c320b474b",
    path: "/frontend/js/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/README.md").then(comp => {
        Vue.component("v-5cf0c320b474b", comp.default)
        next()
      })
    }
  },
  {
    path: "/frontend/js/index.html",
    redirect: "/frontend/js/"
  },
  {
    name: "v-9f149f4f7631c",
    path: "/frontend/js/azure-storage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/azure-storage.md").then(comp => {
        Vue.component("v-9f149f4f7631c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b50f011e68388",
    path: "/frontend/js/basic-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/basic-knowledge.md").then(comp => {
        Vue.component("v-b50f011e68388", comp.default)
        next()
      })
    }
  },
  {
    name: "v-148aae37e8a72",
    path: "/frontend/js/build.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/build.md").then(comp => {
        Vue.component("v-148aae37e8a72", comp.default)
        next()
      })
    }
  },
  {
    name: "v-33d89ddbf43c",
    path: "/frontend/js/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/function.md").then(comp => {
        Vue.component("v-33d89ddbf43c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2899e3b753c02",
    path: "/frontend/js/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/http.md").then(comp => {
        Vue.component("v-2899e3b753c02", comp.default)
        next()
      })
    }
  },
  {
    name: "v-960a58c03d935",
    path: "/frontend/js/hybrid.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/hybrid.md").then(comp => {
        Vue.component("v-960a58c03d935", comp.default)
        next()
      })
    }
  },
  {
    name: "v-23901469e62d5",
    path: "/frontend/js/mobile-adaptive.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/mobile-adaptive.md").then(comp => {
        Vue.component("v-23901469e62d5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1254bf06953ad",
    path: "/frontend/js/senior-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/senior-knowledge.md").then(comp => {
        Vue.component("v-1254bf06953ad", comp.default)
        next()
      })
    }
  },
  {
    name: "v-09f5503c51c64",
    path: "/frontend/js/the-little-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/the-little-knowledge.md").then(comp => {
        Vue.component("v-09f5503c51c64", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a4ec9b62cb765",
    path: "/frontend/js/vue-jsonp.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/vue-jsonp.md").then(comp => {
        Vue.component("v-a4ec9b62cb765", comp.default)
        next()
      })
    }
  },
  {
    name: "v-78c448c1787d6",
    path: "/frontend/js/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/vue.md").then(comp => {
        Vue.component("v-78c448c1787d6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fc8ada4e14d",
    path: "/frontend/js/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/webpack.md").then(comp => {
        Vue.component("v-fc8ada4e14d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ee5e917955f3",
    path: "/frontend/node/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/README.md").then(comp => {
        Vue.component("v-0ee5e917955f3", comp.default)
        next()
      })
    }
  },
  {
    path: "/frontend/node/index.html",
    redirect: "/frontend/node/"
  },
  {
    name: "v-7c5e1f565405b",
    path: "/frontend/node/basis.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/basis.md").then(comp => {
        Vue.component("v-7c5e1f565405b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c073359f02c2b",
    path: "/frontend/node/koa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/koa.md").then(comp => {
        Vue.component("v-c073359f02c2b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0c87716f57639",
    path: "/life/english.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/english.md").then(comp => {
        Vue.component("v-0c87716f57639", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eb9206be578bb",
    path: "/life/resume.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/resume.md").then(comp => {
        Vue.component("v-eb9206be578bb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f47c54535b6d4",
    path: "/life/xian.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/xian.md").then(comp => {
        Vue.component("v-f47c54535b6d4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a1081cf851042",
    path: "/linux/crontab.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/crontab.md").then(comp => {
        Vue.component("v-a1081cf851042", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d84b77e3cad",
    path: "/linux/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/git.md").then(comp => {
        Vue.component("v-6d84b77e3cad", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a35441a863c74",
    path: "/linux/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/index.md").then(comp => {
        Vue.component("v-a35441a863c74", comp.default)
        next()
      })
    }
  },
  {
    path: "/linux/index.html",
    redirect: "/linux/"
  },
  {
    name: "v-0dbae75305d9e",
    path: "/linux/nginx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/nginx.md").then(comp => {
        Vue.component("v-0dbae75305d9e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b0587b802ac3a",
    path: "/math/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/math/斐波那契数列.md").then(comp => {
        Vue.component("v-b0587b802ac3a", comp.default)
        next()
      })
    }
  },
  {
    path: "/math/斐波那契数列.html",
    redirect: "/math/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]