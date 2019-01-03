# webpack

[[toc]]

## [中文文档](https://webpack.docschina.org/concepts/)

## 为什么需要构建

- 前端工程复杂化，文件越来越多

- 框架演变：

`js库——>MVC——>MV*(模块化)`

- HTML发展历史

<img :src="$withBase('/assets/html.png')" >

- CSS发展历史

<img :src="$withBase('/assets/css.png')" >

- 前端脚本语言

`JS->CoffeeScript->ES2018->TS`

- 环境的变化

现在的前端代码，一份代码可能要跑在浏览器端、服务器端、移动端

- 社区的变化

现在搜索资源可以在`github`/`npm`进行搜索

- 构建工具的变化

`GRUNT->GULP->WEBPACK`

**总结**

- 开发复杂化

- 框架去中心化（非大而全）

- 语言编译化（写的代码浏览器都不认识）

- 开发模块化（模块化浏览器也不认识）

**为什么Webpack？**

- `Vue-cli/React-starter/Angular-cli`都是基于webpack打包

- 代码分割`Code-splitting`

- 天生的模块化

## 模块化开发

`babel`编译ES6语法，模块化可用`webpack`和`rollup`

### 1. JS模块化

- **命名空间（上古年代）**

库名.类别名.方法名 （现在看来就非常不方便了）

```js
var NameSpace = {}

NameSpace.type = NameSpace.type || {}

NameSpace.type.method = function () {

}
```
- **CommonJS（node服务端使用）**

```js
 Modules/1.1.1

 一个文件为一个模块

 通过`module.exports`暴露模块接口

 通过`require`引入模块

 同步执行
```

- AMD/CMD (浏览器中使用)

```js
AMD:依赖前置，提前执行(Async Module Definition)

使用define定义模块

使用require加载模块

代表作：RequireJS # 这个库采用AMD规范

define(
  // 模块名
  "alpha",
  // 依赖
  ["require", "exports", "beta"],
  // 模块输出
  function (require, exports, beta) {
    exports.verb = function() {
      return beta.verb()
    }
  }
)

CMD:尽可能懒加载(Common Module Definition)

一个文件为一个模块

使用define来定义一个模块

使用require来加载一个模块

代表作：SeaJS

// 所有模块都通过define来定义
define(function(require, exports, module) {
  // 通过require引入依赖
  var $ = require('jquery')
  var Spinning = require('./spinning')

  // 通过module.exports提供整个接口
  module.exports = ...
})

UMD:通用解决防范

三个步骤：
  判断是否支持AMD
  判断是否支持CommonJS
  如果都没有，使用全局变量
```

- ESM(现在用的,webpack原生支持)

```js
EcmaScript  Module

一个文件一个模块

import:

import theDefault, {named1, named2} from 'src/mylib'
import {named1 as myNamed1, named2} from 'src/mylib'
import * as mylib form 'src/mylib'
import 'src/mylib' // 只加载

export:

export const myVar1 = ''
export function myFunc() { }
export class MyClass { }

export default 123
export default function (x) {
  return x
}
export default x => x
export default class {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}
```

### CSS模块化

css设计模式 ：OOCSS（面向对象）、原子css、属性css、BEM（Block Element Modifier）

## 安装webpack

1. 全局安装

```sh
 npm install webpack -g
```

然后，会报错，显示没有权限

```sh
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```
更改权限后，再次安装

```sh
npm install webpack-cli -g
```

2. 项目安装

```sh
npm init

npm i webpack -D
```

## 版本更迭

**1. Webpack V1**(2014.2)

- 编译、打包 

- HMR（模块热更新）

- 代码分割

- 文件处理（loader、plugin）

**2. Webpack V2**(2017.1)

- Tree Shaking(会删除引入的，但并没有使用的代码，打包的代码体积更好)

- ES module

- 动态Import（import函数）

- 新的文档

**3. Webpack V3**(2017.6)

- Scope Hoisting（作用域提升）

作用：打包以后代码性能的提升

原理：以前的版本，是把每个模块单独包裹在一个函数的闭包中，实现模块系统，闭包越多对浏览器性能影响越大；在v3版本总，将代码的模块的作用域提到单一的作用域中，保证浏览器运行速度

- Magic Comments(配合动态import使用，指定webpack可以懒加载这段代码，打包后不知道叫什么名字)

可以指定打包后的文件名叫什么/chunk名叫什么

**4. Webpack V4**(2018.2)

[Webpack 4.0 发布:有哪些新特性？（译）](https://segmentfault.com/a/1190000013608316)

[Webpack 4 不完全迁移指北](https://github.com/dwqs/blog/issues/60)

## 核心概念

### Entry

代码的入口

打包的入口

可以是单个或者多个
```js
module.exports = {
  entry: {
    index: 'index.js', // 这个key可以表示为一个独特的chunk
    vendor: 'vendor.js'
  }
} 
```

### Output

打包成的文件（bundle）

一个或者多个

自定义规则（hash名字）

配合cdn
```js
module.exports = {
  output: {
    filename: '[name].[hash:5].js'
  }
}
```

### Loaders

处理文件(除js文件外，v4好像默认的文件更多了)

转化为js的一个模块，引入进来

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      }
    ]
  }
}
```

**常用Loader**

编译相关：

`babel-loader` `ts-loader`

样式相关:

`style-loader` `css-loader` `stylus-loader` `postcss-loader`

文件相关：

`file-loader` `url-loader`

### Plugins

参与打包整个过程

打包优化和压缩

配置编译时的变量

极其灵活

```js
const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(), // 混淆和压缩代码
    new HtmlWebpackPlugin({
      chunks: ['vant-docs'],
      template: 'docs/src/index.tpl',
      filename: 'index.html',
      inject: true
    })
  ]
}
```

**常用Plugins**

优化相关：

`CommonsChunkPlugin`(4中已被移除):用于建立一个独立文件(又称作 chunk)的功能

```js
new webpack.optimize.CommonsChunkPlugin(options)
```

`UglifyjsWebpackPlugin`:能够删除未引用代码(dead code)的压缩工具(minifier)，还可以生成`source-map`

功能相关：

`ExtractTextWebpackPlugin`:将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到 JS bundle 中，而是会放到一个单独的 CSS 文件（即 styles.css）当中。

`HtmlWebpackPlugin`:让插件为你生成一个HTML文件

模块热替换插件(`HotModuleReplacementPlugin`)

`CopyWebpackPlugin`:拷贝文件

### 几个名词

Chunk: 代码块，比如说懒加载的某个代码块、公共的代码块

Bundle: 打包过的

Module: 模块，比如图片处理完可以叫一个模块，css处理后可以叫一个模块

## 使用webpack

1. webpack命令

```sh
webpack -h

webpack -v

webpack <entry> <output>
```

2. webpack配置

```sh
webpack --config webpack.conf.dev.js(自定义的配置文件名)
```

3.  第三方脚手架

```sh
vue-cli

angular-cli

react-starter
```

例子： 编译ES6/7

```js
1. npm init

2. npm i webpack babel-preset-env babel-loader babel-core

3. "build": "webpack --config webpack.config.js"  

4. webpack.config.js

module.exports = {
  mode: 'development',
  entry: {
    app: './app.js'
  },
  output: {
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['babel-preset-env', {
                targets: {
                  browsers:['> 1%', 'last 2 versions']
                }
              }]
            ]
          }
        },
        exclude: '/node_modules/'
      }
    ]
  }
}

5. app.js

let func = () => {}
const NUM = 34
let arr = [1,2,3]
let arr2 = arr.map(item => item * 2)

console.log('new Set(arr2)', new Set(arr2))

6. npm run build
```

## 打包速度优化

### 分开vendor和app

减少第三方包的打包

### 压缩和混淆

`UglifyJsPlugin`传入`parallel: true`采用并行方式打包压缩

```js
  new UglifyJsPlugin({
    sourceMap: true
  })
```

### HappyPack

### 减少babel的编译时间

减少`resolve`

Deltool：去除sourceMap

cache-loader

升级node

升级webpack

<RightMenu />