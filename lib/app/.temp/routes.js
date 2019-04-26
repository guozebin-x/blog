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
    name: "v-65e484d90af72",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/README.md").then(comp => {
        Vue.component("v-65e484d90af72", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-d696b19667adb",
    path: "/about/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/about/README.md").then(comp => {
        Vue.component("v-d696b19667adb", comp.default)
        next()
      })
    }
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-e9bde4ef2601",
    path: "/books/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/books/index.md").then(comp => {
        Vue.component("v-e9bde4ef2601", comp.default)
        next()
      })
    }
  },
  {
    path: "/books/index.html",
    redirect: "/books/"
  },
  {
    name: "v-073f31f279d3f",
    path: "/books/sociopath.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/books/sociopath.md").then(comp => {
        Vue.component("v-073f31f279d3f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-67345b9359178",
    path: "/english/base.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/base.md").then(comp => {
        Vue.component("v-67345b9359178", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fbbc1d2d3eee1",
    path: "/english/spell.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/spell.md").then(comp => {
        Vue.component("v-fbbc1d2d3eee1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-01a10b15ee38d",
    path: "/frontend/js/OAuth2.0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/OAuth2.0.md").then(comp => {
        Vue.component("v-01a10b15ee38d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-718b3b2f21936",
    path: "/frontend/js/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/README.md").then(comp => {
        Vue.component("v-718b3b2f21936", comp.default)
        next()
      })
    }
  },
  {
    path: "/frontend/js/index.html",
    redirect: "/frontend/js/"
  },
  {
    name: "v-bc42ffb22c5f4",
    path: "/frontend/js/azure-storage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/azure-storage.md").then(comp => {
        Vue.component("v-bc42ffb22c5f4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2101456e7cff5",
    path: "/frontend/js/basic-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/basic-knowledge.md").then(comp => {
        Vue.component("v-2101456e7cff5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5be5e40be086a",
    path: "/frontend/js/build.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/build.md").then(comp => {
        Vue.component("v-5be5e40be086a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f8560dfb2a65",
    path: "/frontend/js/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/function.md").then(comp => {
        Vue.component("v-8f8560dfb2a65", comp.default)
        next()
      })
    }
  },
  {
    name: "v-35e16c01a2667",
    path: "/frontend/js/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/http.md").then(comp => {
        Vue.component("v-35e16c01a2667", comp.default)
        next()
      })
    }
  },
  {
    name: "v-50c0ad5f61833",
    path: "/frontend/js/hybrid.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/hybrid.md").then(comp => {
        Vue.component("v-50c0ad5f61833", comp.default)
        next()
      })
    }
  },
  {
    name: "v-83465db8eaaa7",
    path: "/frontend/js/mobile-adaptive.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/mobile-adaptive.md").then(comp => {
        Vue.component("v-83465db8eaaa7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dfd4829e15b2f",
    path: "/frontend/js/senior-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/senior-knowledge.md").then(comp => {
        Vue.component("v-dfd4829e15b2f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a1a5aa7df6b4",
    path: "/frontend/js/the-little-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/the-little-knowledge.md").then(comp => {
        Vue.component("v-a1a5aa7df6b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1d271fc049ff4",
    path: "/frontend/js/vue-jsonp.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/vue-jsonp.md").then(comp => {
        Vue.component("v-1d271fc049ff4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-44e836e7c6af9",
    path: "/frontend/js/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/vue.md").then(comp => {
        Vue.component("v-44e836e7c6af9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-065e25bbf1383",
    path: "/frontend/js/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/webpack.md").then(comp => {
        Vue.component("v-065e25bbf1383", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dfa4ca4062424",
    path: "/frontend/node/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/README.md").then(comp => {
        Vue.component("v-dfa4ca4062424", comp.default)
        next()
      })
    }
  },
  {
    path: "/frontend/node/index.html",
    redirect: "/frontend/node/"
  },
  {
    name: "v-b1e83fd7e0e8b",
    path: "/frontend/node/basis.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/basis.md").then(comp => {
        Vue.component("v-b1e83fd7e0e8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b0626acb64a19",
    path: "/frontend/node/koa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/koa.md").then(comp => {
        Vue.component("v-b0626acb64a19", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fe414a0743037",
    path: "/life/english.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/english.md").then(comp => {
        Vue.component("v-fe414a0743037", comp.default)
        next()
      })
    }
  },
  {
    name: "v-977bff6bd2467",
    path: "/life/resume.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/resume.md").then(comp => {
        Vue.component("v-977bff6bd2467", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f35a0668d3fdb",
    path: "/life/xian.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/xian.md").then(comp => {
        Vue.component("v-f35a0668d3fdb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a76e4c9f122f2",
    path: "/linux/crontab.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/crontab.md").then(comp => {
        Vue.component("v-a76e4c9f122f2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-43f4f0e57e48f",
    path: "/linux/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/git.md").then(comp => {
        Vue.component("v-43f4f0e57e48f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2dc834e799e21",
    path: "/linux/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/index.md").then(comp => {
        Vue.component("v-2dc834e799e21", comp.default)
        next()
      })
    }
  },
  {
    path: "/linux/index.html",
    redirect: "/linux/"
  },
  {
    name: "v-ddf65fd97e6b2",
    path: "/linux/nginx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/nginx.md").then(comp => {
        Vue.component("v-ddf65fd97e6b2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e27d9ccc5398",
    path: "/math/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/math/斐波那契数列.md").then(comp => {
        Vue.component("v-8e27d9ccc5398", comp.default)
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