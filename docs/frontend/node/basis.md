# 基础知识

## nodejs是什么

- **ES的运行时----JavaScript runtime, web开发的runtime**

- **事件驱动，非阻塞I/O**

阻塞：I/0时进程休眠等待I/O完成后进行下一步

非阻塞：I/O时函数立即返回，进程不等待I/O完成

非I/O阻塞模型，那怎么知道I/O完成了呢，就是事件驱动：I/O等异步操作结束后的通知（观察者模式）

## web是nodeJS最适用的场景

在处理高并发、I/O密集（文件操作、网络操作、数据库操作）场景性能优势明显

## NodeJS的单线程

- 单线程只是针对主进程，I/O操作系统底层多线程调度

- 单线程并不是单进程（CPU有几个核，就可以启几个进程）

## 基础API

### path

- `__dirname`、`__filename`总是返回文件的绝对路径

- `process.cwd()`总是返回执行node命令所在的文件夹

### Buffer

- Buffer用于处理二进制数据流

- 实例类似整数数字，大小固定，不能进行变更

- 所用的堆内存，并不是V8引擎分配的，而是使用C++ 代码在V8堆外分配物理内存

- Buffer类在Node.js中是一个全局变量，可以直接使用

## 传参

Node约定，如果某个函数需要回调函数作为参数，则回调函数是最后一个参数。另外，回调函数本身的第一个参数，约定为上一步传入的错误对象。

``` javascript
var callback = function (error, value) {
  if (error) {
    return console.log(error);
  }
  console.log(value);
}
```
上面代码中，callback的第一个参数是Error对象，第二个参数才是真正的数据参数。这是因为回调函数主要用于异步操作，当回调函数运行时，前期的操作早结束了，错误的执行栈早就不存在了，传统的错误捕捉机制try…catch对于异步操作行不通，所以只能把错误交给回调函数处理。

如果没有发生错误，回调函数的第一个参数就传入null。这种写法有一个很大的好处，就是说只要判断回调函数的第一个参数，就知道有没有出错，如果不是null，就肯定出错了。另外，这样还可以层层传递错误。
``` javascript
fs.readFile('/foo.txt', function(err, data) {
  if (err !== null) throw err;
  console.log(data);
});

function async2(continuation) {
  setTimeout(function() {
    try {
      var res = 42;
      if (true)
        throw new Error("woops!");
      else
        continuation(null, res); // pass 'null' for error
    } catch(e) {
      continuation(e, null);
    }
  }, 2000);
}

async2(function(err, res) {
  if (err)
    console.log("Error: (cps) failed:", err);
  else
    console.log("(cps) received:", res);
});
// Error: (cps) failed: woops!
```

## 全局对象

global：声明 var x = 1 ， global.x 等于 undefined

## 全局变量

__filename：指向当前运行的脚本文件名

__dirname：指向当前运行脚本所在目录

## 核心模块
> **http**：提供HTTP服务器功能

> **url**：解析URL

> **fs**：与文件系统交互

> **querystring**：解析URL的查询字符串

> **util**：提供一系列实用小工具

> **path**：处理文件路径
## 异常处理
Node是单线程运行环境，一旦抛出的异常没有被捕获，就会引起整个进程的崩溃。所以，Node的异常处理对于保证系统的稳定运行非常重要。

一般来说，Node有三种方法，传播一个错误。

1.**使用throw语句抛出一个错误对象，即抛出异常。**

2.**将错误对象传递给回调函数，由回调函数负责发出错误。**

3.**通过EventEmitter接口，发出一个error事件。**

## unhandledRejection事件

用来监听没有捕获的Promise对象的rejected状态。
``` javascript
var promise = new Promise(function(resolve, reject) {
  reject(new Error("Broken."));
});

promise.then(function(result) {
  console.log(result);
})
```
上面代码中，promise的状态变为rejected，并且抛出一个错误。但是，不会有任何反应，因为没有设置任何处理函数。

只要监听unhandledRejection事件，就能解决这个问题。

```js
process.on('unhandledRejection', function (err, p) {
  console.error(err.stack);
})
```

## EventEmitter 类

```js
//event.js 文件
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 1000); 
```
  自定义一个事件，通过event.emit调用

**大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。**

为什么要这样做呢？原因有两点：

首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法。

其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

<RightMenu />