# JS组成

我们常说的JS（浏览器执行的JS）包含两部分：

- JS基础知识（ECMA262标准），基础语法，node遵循这个规范

- JS-Web-API（W3C标准），api，node不遵循W3C规范

## DOM操作（Document Object Model）(数据结构：树)

**浏览器把拿到的`html`代码，结构化成一个浏览器能识别并且`js`可操作的一个模型。**

```js
document.getElementById('app') // 元素
document.getElementsByTagName('div') // 集合
document.getElementsByClassName('.container') // 集合

var plist = document.querySelectorAll('p') // 集合
var p = plist[0]

p.getAttribute('style')
p.setAttribute('style', 'font-size:30px;')
```

## DOM结构操作

```js
var app = document.getElementById('app') // 查找
 
var p =document.createElement('p') // 创建

app.appendChild(p) // 添加子元素
app.parentElement // 获取父元素
app.childNodes // 获取子元素
app.removeChild(p) // 移除子元素

// 移动元素：先获取元素，然后操作元素（比如append到别的元素）
```

#### attribute和property的区别

- property只是一个js对象的属性的修改

- attribute是对html标签属性的修改

## BOM操作 (Browser Object Model)

### navigator

```js
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```

### screen

```js
console.log(screen.width)
console.log(screen.height)
```

### location

```js
console.log(location.href) // 整个url
console.log(location.protocol) // 协议‘https://’
console.log(location.host) // 域名
console.log(location.pathname) // 路径 
console.log(location.search) // ?参数
console.log(location.hash) // #hash
```

### history

```js
history.back() // 后退
history.forward() // 前进
```

 