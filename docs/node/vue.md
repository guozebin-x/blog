# vue工作原理

## 入口

vue首先是一个Function，es5中通过方法声明一个类，需要new这个方法，也就是new Vue()，生成一个实例对象，这个实例对象上有那么多方法哪来的呢？是通过Vue的prototype挂载到原型上。

这里没有通过ES6的class来定义，原因就是js是动态类型语言，通过方法，我们可以随意挂载方法到它的原型上，这样一类方法用一个文件来编写，就把代码解耦了，做到了模块化拆分。


## vue实例挂载

在Vue中，我们通过`$mount`实例方法来挂载`vm`。

首先，对`el`做了限制，Vue不能挂载到`body`、`html`上这样的根节点上，然后会进行判断，如果没有定义`render`方法，则会把`el`或者`template`字符串转换成`render`方法。

`$mount`方法传入两个参数，第一个是`el`，表示挂载的元素，可以是字符串，也可以是DOM对象，如果是字符串在浏览器环境下会调用`query`方法来转成DOM对象，第二个参数是和服务端渲染（ssr）有关。

然后就是调用`vm._render`方法了生成虚拟的Node了，同时呢，在实例化一个`Watcher`，也就是说在页面初始化的时候通过一大堆的数据计算后，渲染DOM，然后呢，中间数据变化了，`Watcher`监听到了，再次执行。

第一步，把一堆`template`转成`render`函数；

第二步，通过`render`中的`createElement`创建组件的`VNode`（虚拟DOM）

第三步，走`vm._update`，把虚拟DOM转换成真正的DOM节点。

## runtime-only和compiler and runtime

vue实例挂载，最终都要通过render函数来执行，如果采用`runtime-only`模式，要直接写render函数，而采用`compiler`组合的模式，则可以书写`template`。通过`wm._update`方法传入`render`来渲染`Watcher`。

## component生成

组件的生成的流程，是之前通过render方法，来`createElement`，如果tag是传入的最上层的`app`组件，那么首先Vue会构造子类的构造函数，把自身的一堆`options`传递给子类，组件集成过程其实用的就是

```js
  Sub.prototype = Object.create(Super.prototype)
  Sub.prototype.constructor = Sub
```

这里面有一个缓存方法，把构造函数进行了缓存，对于拥有相同父类的子组件，就不重复构造了。完了之后，通过`new VNode`实例化一个`vnode`并返回。



