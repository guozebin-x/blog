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
    name: "v-2da300345503d",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/README.md").then(comp => {
        Vue.component("v-2da300345503d", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-ca34b02e523a8",
    path: "/about/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/about/README.md").then(comp => {
        Vue.component("v-ca34b02e523a8", comp.default)
        next()
      })
    }
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-540fe1701e10f",
    path: "/blog/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/blog/git.md").then(comp => {
        Vue.component("v-540fe1701e10f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-074562fd09f17",
    path: "/blog/process.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/blog/process.md").then(comp => {
        Vue.component("v-074562fd09f17", comp.default)
        next()
      })
    }
  },
  {
    name: "v-60d7e6d30fdbd",
    path: "/books/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/books/index.md").then(comp => {
        Vue.component("v-60d7e6d30fdbd", comp.default)
        next()
      })
    }
  },
  {
    path: "/books/index.html",
    redirect: "/books/"
  },
  {
    name: "v-5600841643145",
    path: "/books/sociopath.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/books/sociopath.md").then(comp => {
        Vue.component("v-5600841643145", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3524787afdfe9",
    path: "/english/base.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/base.md").then(comp => {
        Vue.component("v-3524787afdfe9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dfbe67f916dca",
    path: "/english/spell.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/spell.md").then(comp => {
        Vue.component("v-dfbe67f916dca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57c2bcadc3361",
    path: "/english/taiji-grammar.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/taiji-grammar.md").then(comp => {
        Vue.component("v-57c2bcadc3361", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5271e1e88bffc",
    path: "/frontend/js/OAuth2.0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/OAuth2.0.md").then(comp => {
        Vue.component("v-5271e1e88bffc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a2c38a6c1b30d",
    path: "/frontend/js/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/README.md").then(comp => {
        Vue.component("v-a2c38a6c1b30d", comp.default)
        next()
      })
    }
  },
  {
    path: "/frontend/js/index.html",
    redirect: "/frontend/js/"
  },
  {
    name: "v-a02ab4e6c6016",
    path: "/frontend/js/azure-storage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/azure-storage.md").then(comp => {
        Vue.component("v-a02ab4e6c6016", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57cba0db9716b",
    path: "/frontend/js/basic-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/basic-knowledge.md").then(comp => {
        Vue.component("v-57cba0db9716b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4662ff2b2b4c",
    path: "/frontend/js/build.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/build.md").then(comp => {
        Vue.component("v-4662ff2b2b4c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-83dec7f6b270b",
    path: "/frontend/js/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/function.md").then(comp => {
        Vue.component("v-83dec7f6b270b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-727a159b46f8c",
    path: "/frontend/js/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/http.md").then(comp => {
        Vue.component("v-727a159b46f8c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ebcf43f7a995a",
    path: "/frontend/js/hybrid.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/hybrid.md").then(comp => {
        Vue.component("v-ebcf43f7a995a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b2bd176976232",
    path: "/frontend/js/mobile-adaptive.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/mobile-adaptive.md").then(comp => {
        Vue.component("v-b2bd176976232", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8774e179279b",
    path: "/frontend/js/senior-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/senior-knowledge.md").then(comp => {
        Vue.component("v-8774e179279b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-be4e2c125712d",
    path: "/frontend/js/the-little-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/the-little-knowledge.md").then(comp => {
        Vue.component("v-be4e2c125712d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-86b9bc65e7dfe",
    path: "/frontend/js/vue-jsonp.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/vue-jsonp.md").then(comp => {
        Vue.component("v-86b9bc65e7dfe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6154e136d40ee",
    path: "/frontend/js/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/vue.md").then(comp => {
        Vue.component("v-6154e136d40ee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ec57b8a1b2fe",
    path: "/frontend/js/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/webpack.md").then(comp => {
        Vue.component("v-9ec57b8a1b2fe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ce3feca33df5d",
    path: "/frontend/node/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/README.md").then(comp => {
        Vue.component("v-ce3feca33df5d", comp.default)
        next()
      })
    }
  },
  {
    path: "/frontend/node/index.html",
    redirect: "/frontend/node/"
  },
  {
    name: "v-2f3f7d2a824b8",
    path: "/frontend/node/basis.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/basis.md").then(comp => {
        Vue.component("v-2f3f7d2a824b8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e70f7cf8d7f6d",
    path: "/frontend/node/koa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/koa.md").then(comp => {
        Vue.component("v-e70f7cf8d7f6d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-df0026436e5e4",
    path: "/life/english.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/english.md").then(comp => {
        Vue.component("v-df0026436e5e4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-adb37529e45d5",
    path: "/life/resume.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/resume.md").then(comp => {
        Vue.component("v-adb37529e45d5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d985760cd6e25",
    path: "/life/xian.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/xian.md").then(comp => {
        Vue.component("v-d985760cd6e25", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a42daee4c9047",
    path: "/linux/crontab.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/crontab.md").then(comp => {
        Vue.component("v-a42daee4c9047", comp.default)
        next()
      })
    }
  },
  {
    name: "v-93a7a9884e31",
    path: "/linux/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/git.md").then(comp => {
        Vue.component("v-93a7a9884e31", comp.default)
        next()
      })
    }
  },
  {
    name: "v-297b26706bbe6",
    path: "/linux/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/index.md").then(comp => {
        Vue.component("v-297b26706bbe6", comp.default)
        next()
      })
    }
  },
  {
    path: "/linux/index.html",
    redirect: "/linux/"
  },
  {
    name: "v-a0200023e7b3f",
    path: "/linux/nginx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/nginx.md").then(comp => {
        Vue.component("v-a0200023e7b3f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ffe274c617a5",
    path: "/math/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/math/斐波那契数列.md").then(comp => {
        Vue.component("v-0ffe274c617a5", comp.default)
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