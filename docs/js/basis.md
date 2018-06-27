# 原型和原型链

## 构造函数

首先，约定俗成，构造函数首字母要大写。在ES6中，被定义为一个类。

## 原型规则

- 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（“null”除外）；

- 所有的引用类型（数组、对象、函数），都有一个`__proto__`属性，属性值是一个普遍的对象；

- 所有的**函数**，都有一个`prototype`属性，属性值也是一个普通的对象；

- 所有的引用类型（数组、对象、函数），`__proto__`属性值指向它的构造函数的`prototype`属性值；

```js
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

## for in

上面的例子中，如果用`for in`循环，能拿到f的三个属性：`name、printName、alertName`，当然这个不是我们希望的：

```js
let item

for (item in f) {
  if (f.hasOwnProperty(item)) { // 保障程序的健壮性
    console.log(item)
  }
}
```

## 原型链

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

## instanceof

用于判断`引用类型`属于哪个`构造函数`的方法

那么 `f instanceof Foo`的判断逻辑：

- f的`__proto__`一层层往上，能否对应到`Foo.prototype`

- 再尝试判断`f instanceof Object`,也是`true`。

所以，判断是否为数组，可以用`instanceof`，不能用`typeof`。

## 例题

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