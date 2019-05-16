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
    name: "v-bf68421da2f57",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/README.md").then(comp => {
        Vue.component("v-bf68421da2f57", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-83c1a4552638c",
    path: "/about/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/about/README.md").then(comp => {
        Vue.component("v-83c1a4552638c", comp.default)
        next()
      })
    }
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-08e69d4f92308",
    path: "/blog/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/blog/git.md").then(comp => {
        Vue.component("v-08e69d4f92308", comp.default)
        next()
      })
    }
  },
  {
    name: "v-04b6fd03d1a9d",
    path: "/books/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/books/index.md").then(comp => {
        Vue.component("v-04b6fd03d1a9d", comp.default)
        next()
      })
    }
  },
  {
    path: "/books/index.html",
    redirect: "/books/"
  },
  {
    name: "v-89dc291ab6363",
    path: "/books/sociopath.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/books/sociopath.md").then(comp => {
        Vue.component("v-89dc291ab6363", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3ddd2a7b4452",
    path: "/english/base.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/base.md").then(comp => {
        Vue.component("v-3ddd2a7b4452", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2260e91841a4f",
    path: "/english/spell.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/english/spell.md").then(comp => {
        Vue.component("v-2260e91841a4f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b5badf5a7e56c",
    path: "/frontend/js/OAuth2.0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/OAuth2.0.md").then(comp => {
        Vue.component("v-b5badf5a7e56c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d2c4b684b3c29",
    path: "/frontend/js/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/README.md").then(comp => {
        Vue.component("v-d2c4b684b3c29", comp.default)
        next()
      })
    }
  },
  {
    path: "/frontend/js/index.html",
    redirect: "/frontend/js/"
  },
  {
    name: "v-9fc350ecf2df9",
    path: "/frontend/js/azure-storage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/azure-storage.md").then(comp => {
        Vue.component("v-9fc350ecf2df9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f15eef757453",
    path: "/frontend/js/basic-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/basic-knowledge.md").then(comp => {
        Vue.component("v-4f15eef757453", comp.default)
        next()
      })
    }
  },
  {
    name: "v-30ddef0664f95",
    path: "/frontend/js/build.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/build.md").then(comp => {
        Vue.component("v-30ddef0664f95", comp.default)
        next()
      })
    }
  },
  {
    name: "v-83d2a6b63d8fb",
    path: "/frontend/js/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/function.md").then(comp => {
        Vue.component("v-83d2a6b63d8fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-15c0e478ab1de",
    path: "/frontend/js/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/http.md").then(comp => {
        Vue.component("v-15c0e478ab1de", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c960496ecbb6d",
    path: "/frontend/js/hybrid.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/hybrid.md").then(comp => {
        Vue.component("v-c960496ecbb6d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-94ffff3da7808",
    path: "/frontend/js/mobile-adaptive.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/mobile-adaptive.md").then(comp => {
        Vue.component("v-94ffff3da7808", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ba341ddf62a05",
    path: "/frontend/js/senior-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/senior-knowledge.md").then(comp => {
        Vue.component("v-ba341ddf62a05", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7cb4167ae932f",
    path: "/frontend/js/the-little-knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/the-little-knowledge.md").then(comp => {
        Vue.component("v-7cb4167ae932f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8575f884c4a6b",
    path: "/frontend/js/vue-jsonp.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/vue-jsonp.md").then(comp => {
        Vue.component("v-8575f884c4a6b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e50e72441545b",
    path: "/frontend/js/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/vue.md").then(comp => {
        Vue.component("v-e50e72441545b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e5de2f0cd6668",
    path: "/frontend/js/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/js/webpack.md").then(comp => {
        Vue.component("v-e5de2f0cd6668", comp.default)
        next()
      })
    }
  },
  {
    name: "v-22cf2d398a349",
    path: "/frontend/node/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/README.md").then(comp => {
        Vue.component("v-22cf2d398a349", comp.default)
        next()
      })
    }
  },
  {
    path: "/frontend/node/index.html",
    redirect: "/frontend/node/"
  },
  {
    name: "v-444a39eded8fd",
    path: "/frontend/node/basis.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/basis.md").then(comp => {
        Vue.component("v-444a39eded8fd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f956a352f8181",
    path: "/frontend/node/koa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/frontend/node/koa.md").then(comp => {
        Vue.component("v-f956a352f8181", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a448adfdc364",
    path: "/life/english.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/english.md").then(comp => {
        Vue.component("v-2a448adfdc364", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b01fb0fb2564c",
    path: "/life/resume.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/resume.md").then(comp => {
        Vue.component("v-b01fb0fb2564c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b5eaaddccd44b",
    path: "/life/xian.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/life/xian.md").then(comp => {
        Vue.component("v-b5eaaddccd44b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6c699c5168a1",
    path: "/linux/crontab.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/crontab.md").then(comp => {
        Vue.component("v-6c699c5168a1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1cb4a4edcdd93",
    path: "/linux/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/git.md").then(comp => {
        Vue.component("v-1cb4a4edcdd93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d7e431d5405c",
    path: "/linux/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/index.md").then(comp => {
        Vue.component("v-5d7e431d5405c", comp.default)
        next()
      })
    }
  },
  {
    path: "/linux/index.html",
    redirect: "/linux/"
  },
  {
    name: "v-4adccdebed7a2",
    path: "/linux/nginx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/linux/nginx.md").then(comp => {
        Vue.component("v-4adccdebed7a2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b49e0d3a440e",
    path: "/math/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/evan/workspaces/blog/docs/math/斐波那契数列.md").then(comp => {
        Vue.component("v-b49e0d3a440e", comp.default)
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