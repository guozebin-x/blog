# JavaScript中数据类型及判断

**判断js中的数据类型有一下几种方法：typeof、instanceof、 constructor、 prototype，接下来主要比较一下这几种方法的异同。**

**首先写一个测试用例：**

```
let test = {
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    symbol:Symbol(),
    obj: {
        name: '我是一个对象',
        id: 1
    },
    arr: \[0, 1, 2\],
    func: function() {
        console.log('我是一个函数')
    },
    date: new Date(0),
    reg: new RegExp('/我是一个正则/ig'),
    err: new Error('我是一个错误'),
    proxy: new Proxy({}, handler),
    promise: new Promise(function (resolve, reject) {
      resolve();
    })
}
```

**1、最常见的判断方法：typeof**

```
  console.log(typeof test.num)  // number
  console.log(typeof test.str)  // string
  console.log(typeof test.boolean)  // boolean
  console.log(typeof test.unf)  // object
  console.log(typeof test.nul)  // object
  console.log(typeof test.symbol)  // symbol
  console.log(typeof test.obj)  // object
  console.log(typeof test.arr)  // object
  console.log(typeof test.func)  // function
  console.log(typeof test.date)  // object
  console.log(typeof test.reg)  // object
  console.log(typeof test.err)  // object
  console.log(typeof test.promise)  // object
  console.log(typeof test.proxy)  // object
```

 typeof返回的类型都是字符串形式

**2、判断已知对象类型的方法： instanceof**

`语法：object instanceof constructor`

```
  console.log(test.obj instanceof Object)  //true
  console.log(test.arr instanceof Array)  //true
  console.log(test.date instanceof Date)  //true
  console.log(test.func instanceof Function)  //true
  console.log(test.reg instanceof RegExp)   //true
  console.log(test.err instanceof Error)   //true
  console.log(test.proxy instanceof Object)   //true
  console.log(test.promise instanceof Promise)  //true
  console.log(test.num instanceof Number)  //false
```

注意：instanceof 后面一定要是对象类型，并且大小写不能错，该方法适合一些条件选择或分支。　 

**3、根据对象的constructor判断： constructor** 

```
  console.log(test.obj.constructor)//Object()
  console.log(test.arr.constructor) //Array()
  console.log(test.date.constructor) //Date()
  console.log(test.func.constructor) //Function()
  console.log(test.promise.constructor) //Promise()
  console.log(test.proxy.constructor) //Object()
  console.log(test.num.constructor) //Number()
  console.log(test.boolean.constructor) //Boolean()
  console.log(test.symbol.constructor) //Symbol()
```

注意： constructor 在类继承时会出错，例如：

```
function A(){};
function B(){};
A.prototype = new B(); //A继承自B
var aobj = new A();
alert(aobj.constructor === B) -----------> true;
alert(aobj.constructor === A) -----------> false;
```

而instanceof方法不会出现该问题，对象直接继承和间接继承的都会报true：

```
alert(aobj instanceof B) ----------------> true;
alert(aobj instanceof B) ----------------> true;
```

言归正传，解决construtor的问题通常是让对象的constructor手动指向自己：

```
aobj.constructor = A; //将自己的类赋值给对象的constructor属性
alert(aobj.constructor === A) -----------> true;
alert(aobj.constructor === B) -----------> false; //基类不会报true了;
```

 **4、通用但很繁琐的方法： prototype**

lodash拷贝进行类型判断中就用了这种方法。

```
  console.log(Object.prototype.toString.call(test.num) === '\[object Number\]')
  console.log(Object.prototype.toString.call(test.str) === '\[object String\]')
  console.log(Object.prototype.toString.call(test.boolean) === '\[object Boolean\]')
  console.log(Object.prototype.toString.call(test.unf) === '\[object Undefined\]')
  console.log(Object.prototype.toString.call(test.nul) === '\[object Null\]')
  console.log(Object.prototype.toString.call(test.symbol) === '\[object Symbol\]')
  console.log(Object.prototype.toString.call(test.obj) === '\[object Object\]')
  console.log(Object.prototype.toString.call(test.arr) === '\[object Array\]')
  console.log(Object.prototype.toString.call(test.func) === '\[object Function\]')
  console.log(Object.prototype.toString.call(test.date) === '\[object Date\]')
  console.log(Object.prototype.toString.call(test.reg) === '\[object RegExp\]')
  console.log(Object.prototype.toString.call(test.err) === '\[object Error\]')
  console.log(Object.prototype.toString.call(test.promise) === '\[object Promise\]')
  console.log(Object.prototype.toString.call(test.proxy) === '\[object Object\]')
```