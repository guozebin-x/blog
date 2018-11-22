# vue源码理解

## MVVM的三要素

 - 响应式：vue如何监听到`data`的每个`属性变化`？

 - 模板引擎：vue的`模板`如何被`解析`，指令如何处理？

 - 渲染：vue的`模板`如何被`渲染`成`html`？以及渲染过程

## vue中如何实现响应式？

- 什么是响应式

    1. 修改`data`属性后，vue立刻监听到

    2. data属性被代理到vm上

- Object.defineProperty

```js
var obj = {}
var _name = 'evan'

Object.defineProperty(obj, 'name', {
  get: function() {
    console.log('get', _name)
    return _name
  },
  set: function (newVal) {
    console.log('set', newVal)
    _name = newVal
  }
})

console.log(obj._name) // 可以监听到
obj._name = 'wang'     // 可以监听到
```

> 所以，vue中数据改变，视图就改变，其核心就是通过`Object.defineProperty`实时监听到数据的变化

- 模拟

```js
var vm = {}
var data = {
  name: 'evan',
  age: 25
}

var key,value
for (key in data) {
  (function (key) {
    Object.defineProperty(vm, key, {
      get: function () {
        console.log('get', data[key]) // 监听
        return data[key]
      },
      set: function (newVal) {
        console.log('set', newVal) // 监听
        data[key] = newVal
      }
    })
  })(key)
}
```

## vue中如何解析模板

- 模板是什么？

1. 本质：字符串

2. 有逻辑，如`v-if``v-for`等

3. 与`html`格式很像，但有很大区别

4. 最终还是要转换为`html`来显示

5. 模板最终必须转成JS代码，因为：

    a. 有逻辑（v-if v-for），必须用JS才能实现（图灵完备）

    b. 转换为html渲染页面，必须用JS才能实现

    c. 因此，模板最重要转换成一个JS函数（`render函数`）

- render函数

```html
<div id="app">
  <p>{{price}}</p>
</div>
```

```js
with(this){
  return _c(
    'div',
    {
      attrs: {"id":"app"}
    },
    [
      _c('p', [_v(_s(price))])
    ]
  )
}
```
1. 模板中所有信息都包含在了`render`函数中

2. `this`即`vm`

3. `price`即`this.price`即`vm.price`，即`data`中的`price`

4. `_c`即`this._c`即`vm._c`

<img :src="$withBase('/assets/render.png')">

- render函数执行时返回vnode

a. `updateComponent`t中实现了`vdom`的`path`

b. 页面首次渲染执行`updateComponent`

c. data中每次修改属性，执行`updateComponent`

## vue的整个实现流程

1. **解析模板成`render`函数**

    a.  模板中所有信息都被`render`函数所包含

    b. 模板中用到的`data`中的属性，都变成了JS变量

    c. 模板中的`v-model v-for`都变成了JS逻辑

    d. `render`函数返回`vnode`

2. **响应式开始监听**

    a. vue中数据驱动视图改变，其核心就是通过`Object.defineProperty`实时监听到数据的变化

    b. 同样，通过`Object.defineProperty`，将`data`的属性代理到`vm`上

3. **首次渲染，显示页面，且绑定依赖**

    a. 初次渲染，执行`updateComponent`,执行`vm._render()`

    b. 执行`render`函数，会访问到上一步代理到`vm`上的`data`的属性

    c. 会被响应式的`get`方法监听到

      *因为，data中有很多属性，有些被用到，有些可能不被用到，被用到的走get，不被用到的不会走到get，未走到get中的属性，set的时候我们也无需关心，避免不必要的重复渲染*

    d. 执行`updateComponent`，会走到`vdom`的`patch`方法

    e. `patch`将`vnode`渲染成`DOM`，初次渲染完成

4. **data属性变化，触发`rerender`**

    a. 修改属性，被响应式的`set`监听到

    b. `set`中执行`updateComponent`

    c. `updateComponent`重新执行`vm._render()`

    d. 生成的`vnode`和`preVnode`，通过`patch`进行对比 

    e. 渲染到`html`
    
## 入口

vue首先是一个Function，es5中通过方法声明一个类，需要new这个方法，也就是new Vue()，生成一个实例对象，这个实例对象上有那么多方法哪来的呢？是通过Vue的prototype挂载到原型上。

这里没有通过ES6的class来定义，原因就是js是动态类型语言，通过方法，我们可以随意挂载方法到它的原型上，这样一类方法用一个文件来编写，就把代码解耦了，做到了模块化拆分。


## vue的数据驱动

vue是怎么通过`data`的赋值就实现了DOM的渲染呢？并没有像jq那样直接操作dom啊？下面就是答案：

在Vue中，我们通过`$mount`实例方法来挂载`vm`。

首先，对`el`做了限制，Vue不能挂载到`body`、`html`上这样的根节点上，然后会进行判断，如果没有定义`render`方法，则会把`el`或者`template`字符串转换成`render`方法。

`$mount`方法传入两个参数，第一个是`el`，表示挂载的元素，可以是字符串，也可以是DOM对象，如果是字符串在浏览器环境下会调用`query`方法来转成DOM对象，第二个参数是和服务端渲染（ssr）有关。

然后就是调用`vm._render`方法了生成虚拟的Node了，同时呢，在实例化一个`Watcher`，也就是说在页面初始化的时候通过一大堆的数据计算后，渲染DOM，然后呢，中间数据变化了，`Watcher`监听到了，再次执行。

第一步，把一堆`template`转成`render`函数；

第二步，通过`render`中的`createElement`创建组件的`VNode`（虚拟DOM）

第三步，走`vm._update`调用`__patch__`，把虚拟DOM转换成真正的DOM节点。

`update`的调用时机有两个，一个是首次渲染，一个是数据更新的时候，通过`VNODE Tree`调用js原生的`appendChild`方法，调用`insert`方法把`DOM`插入到父节点，进行递归调用，把虚拟dom和真实dom映射到一起，从而实现DOM的真正渲染。

`vdom`的真正意义是为了实现跨平台，服务端渲染，以及提供一个性能还算不错 `Dom` 更新策略
`vdom` 让整个 `mvvm` 框架灵活了起来，性能不是最重要的
好的 `diff` 算法只是 `vdom` 实现层面的优化，而并不代表 `vdom` 本身是为了性能优化

## runtime-only和compiler and runtime

vue实例挂载，最终都要通过render函数来执行，如果采用`runtime-only`模式，要直接写render函数，而采用`compiler`组合的模式，则可以书写`template`。通过`wm._update`方法传入`render`来渲染`Watcher`。

## component生成

组件的生成的流程，是之前通过render方法，来`createElement`，如果tag是传入的最上层的`app`组件，那么首先Vue会构造子类的构造函数，把自身的一堆`options`传递给子类，组件集成过程其实用的就是

```js
  Sub.prototype = Object.create(Super.prototype)
  Sub.prototype.constructor = Sub
```

`Super`完全继承了`Vue`的各种属性，所以`Vue.extend`也可以用组件`componentName.extent`来表示。

这里面有一个缓存方法，把构造函数进行了缓存，对于拥有相同父类的子组件，就不重复构造了。完了之后，通过`new VNode`实例化一个`vnode`并返回。

## 派发更新和nextTick

- `派发更新`就是当数据发生改变后，通知所有订阅了这个数据变化的`watcher`执行`update`

- 派发更新的过程中会把所有要执行`update`的`watcher`推入队列中，在`nextTick`后执行`flush`。

- 把所有的数据变化都收集到一次，做一次`nextTick`

- 数据的变化到dom的变化是一个异步的过程

- 本次`nextTick`如果没有执行到，会被收集到`callbacks`数组中，下次`nextTick`执行

- `nextTick`返回一个`promise`对象

- `nextTick`是把要执行的任务推入到一个队列中，在下一个tick同步执行 