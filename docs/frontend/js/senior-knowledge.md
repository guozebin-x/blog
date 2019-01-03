# JS高级知识

[[toc]]

## 原型和原型链

### 构造函数

首先，约定俗成，构造函数首字母要大写。在ES6中，被定义为一个类。

### 原型规则

- 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（“null”除外）；

- 所有的引用类型（数组、对象、函数），都有一个`__proto__`属性，属性值是一个普遍的对象；

- 所有的**函数**，都有一个`prototype`属性，属性值也是一个普通的对象；

- 所有的引用类型（数组、对象、函数），`__proto__`属性值指向它的构造函数的`prototype`属性值；

``` js
var obj = {}   // 实际是 var obj = new Object() 的语法糖

obj.a = 100

console.log(obj.__proto__)

console.log(obj.__proto__ === Object.prototype) // 实例对象obj的__proto__ === 它的构造函数Object的prototype

function fn () {}

console.log(fn.prototype)
```

- 当试图得到一个引用类型的某个属性时，如果这个引用类型本身没有这个属性，那么会去它的`__proto__`（即它的构造函数的`prototype`）中寻找。

```js
// 构造函数
function Foo(name, age) {
  this.name = name
}

Foo.prototype.alertName = () => {
  alert(this.name)
}

// 示例
let f = new Foo('evan')

f.printName = () => {
  console.log(this.name)
}

// 测试
f.printName()
f.alertName() // 自身没有alertName这个属性，那么就往它__proto__上找，也就是它的构造函数Foo的prototype上找
```

### for in

上面的例子中，如果用`for in`循环，能拿到f的三个属性：`name、printName、alertName`，当然这个不是我们希望的：

```js
let item

for (item in f) {
  if (f.hasOwnProperty(item)) { // 保障程序的健壮性
    console.log(item)
  }
}
```

### 原型链

```js
// 构造函数
function Foo(name, age) {
  this.name = name
}

Foo.prototype.alertName = () => {
  alert(this.name)
}

// 示例
let f = new Foo('evan')

f.printName = () => {
  console.log(this.name)
}

// 测试
f.printName()
f.alertName() // 自身没有alertName这个属性，那么就往它__proto__上找，也就是它的构造函数Foo的prototype上找

f.toString() // 要去 f.__proto__.proto__ 中查找，
```

<img :src="$withBase('/assets/prototype.png')" >

### instanceof

用于判断`引用类型`属于哪个`构造函数`的方法

那么 `f instanceof Foo`的判断逻辑：

- f的`__proto__`一层层往上，能否对应到`Foo.prototype`

- 再尝试判断`f instanceof Object`,也是`true`。

所以，判断是否为数组，可以用`instanceof`，不能用`typeof`。

### 例题

1. **如何准确判断一个变量是数组类型**

```js
var arr = []
arr instanceof Array // true
```

2. **描述new一个对象的过程**

- 创建一个新对象

- `this`指向这个新对象

- 执行代码，即对`this`赋值

- 返回`this`

```js
function Foo (name, age) {
  this.name = name
  this.age = age
  // return this // 默认语句
}

var f = new Foo('evan', 26)
```

3. **写一个原型链继承的例子**

```js
// 封装一个DOM查询的工具
function Elem (id) {
  this.elem = document.getElementById(id)
}

Elem.prototype.html = function (val) {
  var elem = this.elem
  if (val) {
    elem.innerHTML = val
    return this // 链式操作
  } else {
    return elem.innerHTML
  }
}

Elem.prototype.on = function (type, fn) {
  var elem = this.elem
  elem.addEventListener(type, fn)
  return this // 链式操作
}

let div1 = new Elem('app')
// console.log(div1.html()) // 找个一有id的页面，把这段粘贴到console

// div1.html('<p>Hello World</p>')
// div1.on('click', function () {
//   alert('clicked')
// })

div1.html('<p>Hello World</p>').on('click', function () {
  alert('clicked')
}).html('<p>return this 进行链式操作</p>')
```

## 作用域和闭包

### this

- `this`要在执行时才能确认值，**定义时无法确认**

- 函数的父级作用域是**定义**时的作用域，不是执行时

 ### 闭包

**使用场景**

- 函数作为返回值

```js
function F1 () {
  var a = 100

  return function () {
    console.log(a) // 本函数没有a，作为自由变量往父作用域查找，a=100，全局的a根本就不是一回事
  }
}
var f1 = F1()
var a = 200
f1() // ?  100 
```

- 函数作为参数来传递

```js
function F1 () {
  var a = 100

  return function () {
    console.log(a) // 自由变量,父作用域查找
  }
}
var f1 = F1()

function F2(fn) {
  var a = 200
  fn()
}
F2(f1) // a=? 注意，作用域是在定义的时候就确定的，不是执行 
```

### 例题

1. 说下对变量提升的理解

- 变量定义

- 函数声明（注意和函数表达式的区别）

2. 说明`this`几种不同的使用场景

- 作为构造函数执行

```js
function Fn (name, age) {
  // this = {}
  this.name = name
  // return this
}
var f = new Foo('evan', 26)
```

- 作为对象属性执行

```js
var obj = {
  name: 'A',
  printName: function () {
    console.log(this.name)
  }
}
obj.printName() // this === obj
```

- 作为普通函数执行

```js
function fn () {
  console.log(this) // window
}
fn()
```

- call apply bind

```js
function fn (name) {
  alert(name)
  console.log(this) // {x:100}
}
fn.call({x:100}, 'evan')
```

3. 创建10个`a`标签，点击的时候弹出对应的序号

```js
var i

for (i = 0; i < 10; i++) {
  (function (i) {
    var a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function (e) {
      e.preventDefault()
      alert(i)
    })
    document.body.appendChild(a)
  })(i)
}
```

或者

```js
for (let i = 0; i < 10; i++) {

    var a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function (e) {
      e.preventDefault()
      alert(i)
    })
    document.body.appendChild(a)
  
}
```

4. 如何理解作用域

- 自由变量

- 作用域链，即自由变量查找

- 闭包的两个场景

**例子**

```js
// 闭包实际应用中主要用于封装变量，收敛权限（把数据隐藏起来，安全考虑）
function isFirstLoad () {
  var _list = []
  return function (id) {
    if (_list.indexOf(id) >= 0) {
      return false
    } else {
      _list.push(id)
      return true
    }
  }
}

// 使用
var firstLoad = isFirstLoad()
firstLoad(10) // true
firstLoad(10) // false
firstLoad(20) // true
```

## 异步和单线程

### 前端使用异步的场景

- 定时任务：settimeout、setinterval

- 网络请求：ajax请求，axios请求，动态img加载

- 事件绑定

### 什么是单线程，和异步有什么关系

单线程----只有一个线程，只能做一件事

原因----避免DOM渲染的冲突

解决方案----异步

因为js是单线程的(`为什么呢？为了避免DOM渲染冲突。浏览器需要渲染dom，js可以修改dom结构，js执行的时候，浏览器dom渲染要暂停，两端js也不能同时执行,webworker支持多线程，但是不能访问dom`)，所以当我们遇到一些可能引起流程阻塞的场景，就要考虑采用异步处理，待程序执行完，处于空闲状态时，会立马看有没有暂存起来的异步程序要执行。

同步和异步的区别：会不会阻塞代码执行 

### 什么是`event-loop`(事件轮循)

事件轮循，JS异步的解决方案

文字意思：*1. 同步代码，直接执行，2. 异步函数先放在`异步队列`中，3. 待同步函数执行完毕，`轮询执行`异步队列函数*

```js
$.ajax({
  url: 'xxxx',
  success: function (result) {
    console.log('a')
  }
})
setTimeout( function() {
  console.log('b')
},100)
setTimeout(function(){
  console.log('c')
})
console.log('d')

// 最后的结果是？
```

轮询的意思就是，一直监听着异步队列，如果有拿进来的，就立刻放到主进程中执行，100ms放入异步队列？1s放入异步队列？

### JQuery的Deferred && Promise

在早期的jq中提出，后来演变为es6的promise规范 

```js
let ajax = $.ajax({
  url:'./data.json'
})
ajax.then(()=>{
  console.log('success')
},()=>{
  console.log('fail')
})
```

promise的reject可通过catch来捕获 
 
promise的串联，链式执行，要return第二个Promise实例

### virtual dom

**vdom是什么？为何会存在vdom？**

- 用JS模拟DOM结构

- DOM变化的对比，放在JS层来做(图灵完备语言：能实现各种逻辑的语言)

- 提高重绘性能

首先，DOM的渲染是最耗费性能的，js运行效率是非常高的。

jQuery操作dom，会因为个别数据的变化，把全部的dom进行重新渲染。

**vdom如何应用，核心api是什么？**

[`snabbdom`](https://github.com/snabbdom/snabbdom)

```js
var snabbdom = require('snabbdom');
var patch = snabbdom.init([ // Init patch function with chosen modules
  require('snabbdom/modules/class').default, // makes it easy to toggle classes
  require('snabbdom/modules/props').default, // for setting properties on DOM elements
  require('snabbdom/modules/style').default, // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners').default, // attaches event listeners
]);
var h = require('snabbdom/h').default; // helper function for creating vnodes

var container = document.getElementById('container');

var vnode = h('div#container.two.classes', {on: {click: someFn}}, [ // 节点，第三个参数，可以是字符串，也可以是个数组
  h('span', {style: {fontWeight: 'bold'}}, 'This is bold'),
  ' and this is just normal text',
  h('a', {props: {href: '/foo'}}, 'I\'ll take you places!')
]);
// 在第一渲染的时候，把所有的数据源全部渲染出来，vnode填充到container（空的）中
patch(container, vnode);

var newVnode = h('div#container.two.classes', {on: {click: anotherEventHandler}}, [
  h('span', {style: {fontWeight: 'normal', fontStyle: 'italic'}}, 'This is now italic type'),
  ' and this is still just normal text',
  h('a', {props: {href: '/bar'}}, 'I\'ll take you places!')
]);
// diff变更过的vnode，只渲染修改的部分DOM
patch(vnode, newVnode); 
```

核心api-`h`、`patch`

**介绍一下diff算法**

- diff算法非常复杂，实现难度很大，源码量很大

`vdom`为何使用diff算法？

- DOM操作是‘昂贵的’，因此尽量减少DOM操作

- 找出本次DOM必须更新的节点来更新，其他的不更新

- 这个“找出”的过程，就需要diff算法

**diff实现过程**

- diff算法，是Linux的基础命令

- patch(container, vnode) 那么，初次渲染也就是把vnode到真实dom的渲染了

<img :src="$withBase('/assets/vnode.png')" />

- patch(vnode, newVnode)

<img :src="$withBase('/assets/newvnode.png')" />

## MVVM

### 使用jQuery和使用框架的区别

- 数据和视图的分离，解耦（开放封闭原则）

- 以数据驱动视图，只关心数据变化，DOM操作被封装

### 对MVVM的理解

- MVC 

- MVVM（Model View ViewModel）：把后端的MVC理念，进行微创新

view通过事件驱动，修改数据，数据通过双向绑定，改变视图

ViewModel:用来联系View和Model

<RightMenu />