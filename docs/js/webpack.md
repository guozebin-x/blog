# webpack

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

## 模块化

**JS模块化**

- 命名空间

库名.类别名.方法名 

```js
var NameSpace = {}

NameSpace.type = NameSpace.type || {}

NameSpace.type.method = function () {

}
```
- CommonJS

```
 Modules/1.1.1

 一个文件为一个模块

 通过`module.exports`暴露模块接口

 通过`require`引入模块

 同步执行
```

- AMD/CMD (浏览器中使用)

```
Async Module Definition

使用define定义模块

使用require加载模块

RequireJS

AMD:`依赖前置，提前执行(CMD:尽可能懒加载)
```

- ESM(现在用的)

```
EcmaScript  Module

一个文件一个模块

export / import
```

**CSS模块化**

## 安装webpack

```
 npm install webpack -g
```

然后，会报错，显示没有权限

```
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```
更改权限后，再次安装

```
npm install webpack-cli -g
```

## 版本更迭

**Webpack V1**

- 编译、打包 

- HMR（模块热更新）

- 代码分割

- 文件处理（loader、plugin）

**Webpack V2**

- Tree Shaking(会删除引入的，但并没有使用的代码)

- ES module

- 动态Import（import函数）

- 新的文档

**Webpack V3**

- Scope Hoisting（作用域提升）

打包以后代码性能的提升：

以前的版本，是把每个模块单独包裹在一个函数的闭包中，实现模块系统，闭包越多对浏览器性能影响越大

V3：

将代码的模块的作用域提到单一的作用域中，保证浏览器运行速度

- Magic Comments(配合动态import使用，指定webpack可以懒加载这段代码，打包后不知道叫什么名字)

可以指定打包后的文件名叫什么/chunk名叫什么

[**Webpack V4**](https://segmentfault.com/a/1190000013608316)

## 核心概念

### Entry

代码的入口

打包的入口

可以是单个或者多个
```js
module.exports = {
  entry: {
    index: 'index.js'
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

处理文件

转化为模块

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
    new webpack.optimize.UglifyJsPlugin()
  ]
}
```

**常用Plugins**

优化相关：

CommonsChunkPlugin(4中已被移除):用于建立一个独立文件(又称作 chunk)的功能

```js
new webpack.optimize.CommonsChunkPlugin(options)
```

UglifyjsWebpackPlugin:能够删除未引用代码(dead code)的压缩工具(minifier)

功能相关：

ExtractTextWebpackPlugin:将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到 JS bundle 中，而是会放到一个单独的 CSS 文件（即 styles.css）当中。

HtmlWebpackPlugin:让插件为你生成一个HTML文件

模块热替换插件(HotModuleReplacementPlugin)

CopyWebpackPlugin

## 使用webpack

- webpack命令

```
webpack <entry> <output>
```

- webpack配置

```
webpack --config webpack.conf.dev.js(自定义的配置文件名)
```

- 第三方脚手架

```
vue-cli

angular-cli

react-starter
```

- 编译ES6/7

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