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
    name: "v-c7a490374602e",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/README.md").then(comp => {
        Vue.component("v-c7a490374602e", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-dfdbc3f33549c",
    path: "/about/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/about/README.md").then(comp => {
        Vue.component("v-dfdbc3f33549c", comp.default)
        next()
      })
    }
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-1bccc609a3b17",
    path: "/blog/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/blog/git.md").then(comp => {
        Vue.component("v-1bccc609a3b17", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e5508f635fc26",
    path: "/blog/process.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/blog/process.md").then(comp => {
        Vue.component("v-e5508f635fc26", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af9851c0523d8",
    path: "/books/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/books/index.md").then(comp => {
        Vue.component("v-af9851c0523d8", comp.default)
        next()
      })
    }
  },
  {
    path: "/books/index.html",
    redirect: "/books/"
  },
  {
    name: "v-cc7911fca53b8",
    path: "/books/sociopath.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/books/sociopath.md").then(comp => {
        Vue.component("v-cc7911fca53b8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eed451a8067",
    path: "/english/base.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/base.md").then(comp => {
        Vue.component("v-eed451a8067", comp.default)
        next()
      })
    }
  },
  {
    name: "v-205bea09cb5f8",
    path: "/english/spell.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/spell.md").then(comp => {
        Vue.component("v-205bea09cb5f8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-860193568e6b3",
    path: "/english/taiji-grammar.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/taiji-grammar.md").then(comp => {
        Vue.component("v-860193568e6b3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f65856d60da74",
    path: "/frontend/js/OAuth2.0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/OAuth2.0.md").then(comp => {
        Vue.component("v-f65856d60da74", comp.default)
        next()
      })
    }
  },
  {
    name: "v-334fc674fd60d",
    path: "/frontend/js/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/README.md").then(comp => {
        Vue.component("v-334fc674fd60d", comp.default)
        next()
      })
    }
  },
  {
    path: "/frontend/js/index.html",
    redirect: "/frontend/js/"
  },
  {
    name: "v-12227d9b83aa5",
    path: "/frontend/js/azure-storage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/azure-storage.md").then(comp => {
        Vue.component("v-12227d9b83aa5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-40e5e9455ce67",
    path: "/frontend/js/basic-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/basic-knowledge.md").then(comp => {
        Vue.component("v-40e5e9455ce67", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f82ef228007b",
    path: "/frontend/js/build.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/build.md").then(comp => {
        Vue.component("v-9f82ef228007b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3c2ab7d5e7814",
    path: "/frontend/js/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/function.md").then(comp => {
        Vue.component("v-3c2ab7d5e7814", comp.default)
        next()
      })
    }
  },
  {
    name: "v-258017118b398",
    path: "/frontend/js/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/http.md").then(comp => {
        Vue.component("v-258017118b398", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e33b8aaf41b1",
    path: "/frontend/js/hybrid.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/hybrid.md").then(comp => {
        Vue.component("v-4e33b8aaf41b1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e233df92da843",
    path: "/frontend/js/mobile-adaptive.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/mobile-adaptive.md").then(comp => {
        Vue.component("v-e233df92da843", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2ee7fd2f17e83",
    path: "/frontend/js/senior-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/senior-knowledge.md").then(comp => {
        Vue.component("v-2ee7fd2f17e83", comp.default)
        next()
      })
    }
  },
  {
    name: "v-604dc24feb215",
    path: "/frontend/js/the-little-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/the-little-knowledge.md").then(comp => {
        Vue.component("v-604dc24feb215", comp.default)
        next()
      })
    }
  },
  {
    name: "v-51cbd73e03225",
    path: "/frontend/js/vue-jsonp.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/vue-jsonp.md").then(comp => {
        Vue.component("v-51cbd73e03225", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7500230221186",
    path: "/frontend/js/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/vue.md").then(comp => {
        Vue.component("v-7500230221186", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ee36aa380acf7",
    path: "/frontend/js/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/webpack.md").then(comp => {
        Vue.component("v-ee36aa380acf7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0a4efc9b0008a",
    path: "/frontend/node/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/README.md").then(comp => {
        Vue.component("v-0a4efc9b0008a", comp.default)
        next()
      })
    }
  },
  {
    path: "/frontend/node/index.html",
    redirect: "/frontend/node/"
  },
  {
    name: "v-039e79d2584fb",
    path: "/frontend/node/basis.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/basis.md").then(comp => {
        Vue.component("v-039e79d2584fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a9e86f6b21c6a",
    path: "/frontend/node/koa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/koa.md").then(comp => {
        Vue.component("v-a9e86f6b21c6a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d32706695ade",
    path: "/life/english.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/english.md").then(comp => {
        Vue.component("v-d32706695ade", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6a8d6e9096361",
    path: "/life/resume.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/resume.md").then(comp => {
        Vue.component("v-6a8d6e9096361", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c2fa555d35b84",
    path: "/life/xian.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/xian.md").then(comp => {
        Vue.component("v-c2fa555d35b84", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a148978fce5f2",
    path: "/linux/crontab.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/crontab.md").then(comp => {
        Vue.component("v-a148978fce5f2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4911c551687b",
    path: "/linux/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/git.md").then(comp => {
        Vue.component("v-f4911c551687b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ba63aef99234b",
    path: "/linux/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/index.md").then(comp => {
        Vue.component("v-ba63aef99234b", comp.default)
        next()
      })
    }
  },
  {
    path: "/linux/index.html",
    redirect: "/linux/"
  },
  {
    name: "v-e27c51f921cf8",
    path: "/linux/nginx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/nginx.md").then(comp => {
        Vue.component("v-e27c51f921cf8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-878af2ceb05c3",
    path: "/math/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/math/斐波那契数列.md").then(comp => {
        Vue.component("v-878af2ceb05c3", comp.default)
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