# JavaScript运行机制

javascript运行时是单线程的。但是JavaScript为什么是单线程的吗？javascript又为什么需要异步？JavaScript又是如何依靠单线程实现异步的？我们又为什么要掌握JavaScript的单线程？

首先来先看下面的例子。

```
setTimeout(function(){

console.log('我执行了')

},1000)
```

这段代码相信大家都非常熟悉，一个常见的定时函数，一秒后执行setTimeout中的函数，但真的是一秒后吗？这种理解是不准确的，那应该怎么来理解呢？这时我们就需要了解JavaScript的运行机制了，我们先来解释一下本文开头的几个问题。

1.JavaScript为什么是单线程的？

JavaScript设计的初衷是用在浏览器中， 那么，我们来想象一下，如果JavaScript是多线程的话，必然可以有两个进程，process1和process2，那么这两个进程可以同时对同一个DOM进行操作。如果这个时候，一个进程要删除这个DOM，另一个进程要编辑这个DOM，岂不是矛盾嘛。所以，这样应该更好理解，JS为什么是单线程了。

2\. JavaScript为什么需要异步？单线程为什么需要异步呢？

JavaScript如果不存在异步，而是自上而下执行，这样的话，假如上一行解析时间很长，那么下面的代码直接就会被阻塞。这种现象对于用户来说，意味着"卡死"。严重影响用户流失，这样解释好理解吧，所以JavaScript需要异步处理。

3\. 单线程如何实现异步呢？JavaScript竟然需要异步，那么它是如何实现异步的呢？

JavaScript是通过事件循环（event loop）来实现的，事件循环机制也就是今天要说的JavaScript运行机制。

  

### 运行机制详解

**1.同步任务和异步任务**

先来看一个例子：

```
    console.log(1)
    setTimeout(function {
        console.log(2)
    },0)
    console.log(3)
```

这段代码的输出顺序应该是什么呢？

输出：1 3 2

其中setTimeout需要延迟一段时间才去执行，这类代码就是异步代码。

看到这个结果，所以通常我们都这么理解JS的执行原理：

第一，判断JS是同步还是异步，同步进入主线程，异步则进入event table。

第二，异步任务在event table中注册函数，当满足触发条件后，被推入event queue(事件队列)。

第三，同步任务进入主线程后一直执行，直到主线程空闲，才会去event queue中查看是否有可执行的异步任务，如果有就推入主线程。

按到这个逻辑，上面这段实例代码，是不是就很好理解了。1，3是同步任务进入主要线程，自上而下执行，2是异步任务，满足触发条件后，推入事件队列，等待主线程有空时调用。

**2.宏任务和微任务**

然而，按照同步和异步任务来理解JS的运行机制似乎并不准确。

来看一段代码。看看它的输出顺序。

```
    setTimeout(function(){
        console.log(1)
    },0)
    new Promise(function(resolve){
        console.log(2)
        resolve()
    }).then(function(){
        console.log(3)
    })
    console.log(4)
```

上面这段代码，按同步和异步的理解，输出结果是：2，4，1，3。因为2，4是同步任务，按顺序在主线程自上而下执行，而1，3是异步任务，按顺序在主线程有空后自先而后执行。

可事实输出并不是这个结果，而是这样的：2，4，3，1。为什么呢？来理解一下宏任务和微任务。

**宏任务**：包括整体script代码，setTimeout和setInterval。

**微任务**：Promise，process.nextTick（回调函数）。

![](https://img-blog.csdn.net/20180924120852420?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjM1MTY3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

第一，执行一个宏任务（主线程的同步script代码），过程中如果遇到微任务，就将其放到微任务的事件队列里。

第二，当前宏任务（同步的）执行完成后，会查找微任务的事件队列，将全部的微任务依次执行完，再去依次执行宏任务事件队列。

上面代码中promise的then是一微任务，因此它的执行在setTimeout之前。

### JavaScript执行顺序总结为：

**同步宏任务→微任务promise→微任务process.nextTick→异步宏任务**

需要注意的是：在node环境下，process.nextTick的优先级高于promise。也就是可以简单理解为，在宏任务结束后会先执行微任务队列中的nextTickQueue部分，然后才会执行微任务中的promise部分。

所以最后总结一下，对于文章一开头提到的那段代码，我们可以准确的理解为：

1秒后，setTimeout里的函数会被推入event queue，而event queue（事件队列）里的任务，只有在主线程空闲时才会执行。也就是需要同时满足两个条件（1）1秒后。（2）主线程必须空闲，这样1秒后才会执行该函数。