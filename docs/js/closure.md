# 作用域和闭包

## this

- `this`要在执行时才能确认值，**定义时无法确认**

- 函数的父级作用域是**定义**时的作用域，不是执行时

 ## 闭包

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

## 例题

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