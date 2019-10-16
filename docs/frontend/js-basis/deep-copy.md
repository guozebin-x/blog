# 深拷贝与浅拷贝

如何区分深拷贝与浅拷贝？简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明是浅拷贝，如果B没变，那就是深拷贝。深入点来说，就是B复制了A，如果B复制的是A的引用，那就是浅拷贝，如果B复制的是A的本体，那就是深拷贝。在深入了解深拷贝和浅拷贝之前，我们先得了解堆栈和数据类型。

### 一.堆栈和数据类型

在js中，数据类型分为两种，基本类型和引用类型。基本类型指的是简单的数据段，而引用类型指的是那些可能由多个值构成的对象。js中有五种基本数据类型number,string,boolean,null,undefined，他们的值被以键值对的形式保存在栈中。

<img :src="$withBase('/assets/deep-copy/deep-copy1.png')" >

引用类型只有object一种。但js中除了基本数据类型，万物皆对象，数组，函数，对象都是object类型，甚至null也被认为是一个空对象，使用typeof检测时返回object。与基本类型不同的是，引用类型的值被保存在堆内存中，对象的引用被保存在栈内存中，而且我们不可以直接访问堆内存，只能访问栈内存。所以我们操作引用类型时实际操作的是对象的引用。

<img :src="$withBase('/assets/deep-copy/20181005124824931.png')" >

现在我们来看文章开头那句话，浅拷贝是拷贝了对象的引用，所以基本数据类型是不存在深浅拷贝的。当 a=1，b=a时，栈内存会新开辟一个内存，例如这样：

<img :src="$withBase('/assets/deep-copy/20181005142609917.png')" >

深拷贝与浅拷贝出现的根源就在于引用数据类型。当我们定义a=\[0,1,2,3,4\]，b=a时，其实复制的是a的引用地址，而并非堆里面的值。因为指向了相同的地址，所以当我们更改a时b会改变，更改b时a也会改变，这就是浅拷贝。

<img :src="$withBase('/assets/deep-copy/20181005142738562.png')" >

但很多时候我们并不希望a和b直接互相影响，这时就需要想下图这样，单独为b也开辟一块堆内存，这就用到了深拷贝。

<img :src="$withBase('/assets/deep-copy/20181005143305923.png')" >


### 二.深拷贝的实现

深拷贝是针对引用类型的，在进行深拷贝之前，我们应该先知道js中有哪些引用类型，js中引用类型目前有六种：object，array，date，regexp，function，err。下面的两种方法只能实现object，array的深拷贝。

**1\. 迭代递归法**

**for...in...法**

对对象进行迭代操作，对它的每个值进行递归深拷贝。

```
function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
}
// 迭代递归法：深拷贝对象与数组
function deepClone(obj) {
    if (!isObject(obj)) {
        throw new Error('obj 不是一个对象！')
    }

    let isArray = Array.isArray(obj)
    let cloneObj = isArray ? \[\] : {}
    for (let key in obj) {
        cloneObj\[key\] = isObject(obj\[key\]) ? deepClone(obj\[key\]) : obj\[key\]
    }

    return cloneObj
}
```

 **Reflect 法 **

```
function deepClone(obj) {
    if (!isObject(obj)) {
        throw new Error('obj 不是一个对象！')
    }

    let isArray = Array.isArray(obj)
    let cloneObj = isArray ? \[...obj\] : { ...obj }
    Reflect.ownKeys(cloneObj).forEach(key => {
        cloneObj\[key\] = isObject(obj\[key\]) ? deepClone(obj\[key\]) : obj\[key\]
    })

    return cloneObj
}
```

 function、Date、RegExp 和Error无法复制，因为它们有特殊的构造函数。

**2\. 序列化反序列化法**

**使用JSON对象的parse和stringify方法来实现深拷贝**

```
function deepClone(obj){
    let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);
    return objClone
}    
let a=\[0,1,\[2,3\],4\],
    b=deepClone(a);
a\[0\]=1;
a\[2\]\[0\]=1;
console.log(a,b);
```

它也只能深拷贝对象和数组，对于其他种类的对象，会失真。这种方法比较适合平常开发中使用，因为通常不需要考虑对象和数组之外的类型。

**3.lodash中深拷贝的实现**

著名的 lodash 中的 cloneDeep 方法同样是使用 **Reflect 法 **实现的，只不过它支持的对象种类更多，具体的实现过程读者可以参考[ lodash 的 baseClone 方法](https://link.jianshu.com/?t=https%3A%2F%2Fgithub.com%2Flodash%2Flodash%2Fblob%2Fmaster%2F.internal%2FbaseClone.js)。lodash可以完成array、object、date、regexp的深拷贝，但 function 和 error 仍然不可拷贝。

### 进阶

1.  对象成环怎么办？  
    我们给 test 加一个 loopObj 键，值指向自身：
    

```
test.loopObj = test
```

这时我们使用第一种方法中的 for..in 实现和 Reflect 实现都会栈溢出：

  

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy80NzYyMDI4LTZlN2EwYTRlZjRlM2FlZTMucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXAlN0NpbWFnZVZpZXcyLzIvdy84MjgvZm9ybWF0L3dlYnA?x-oss-process=image/format,png)

环对象深拷贝报错

而使用第二种方法也会报错：

  

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy80NzYyMDI4LTg3NjI5Yzc5NGQ2MDJjZDAucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXAlN0NpbWFnZVZpZXcyLzIvdy80MzIvZm9ybWF0L3dlYnA?x-oss-process=image/format,png)

但 lodash 却可以得到正确结果：

  

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy80NzYyMDI4LTk0OTJkNjc4Y2QzMTIxZWYucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXAlN0NpbWFnZVZpZXcyLzIvdy81MzUvZm9ybWF0L3dlYnA?x-oss-process=image/format,png)

  

为什么呢？我们去 lodash 源码看看：

  

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy80NzYyMDI4LWNmOTcxZDliNWY3NDkyYjcucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXAlN0NpbWFnZVZpZXcyLzIvdy80OTcvZm9ybWF0L3dlYnA?x-oss-process=image/format,png)

  

因为 lodash 使用的是栈把对象存储起来了，如果有环对象，就会从栈里检测到，从而直接返回结果，悬崖勒马。这种算法思想来源于 HTML5 规范定义的[结构化克隆算法](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FGuide%2FAPI%2FDOM%2FThe_structured_clone_algorithm%23%25E7%259B%25B8%25E5%2585%25B3%25E9%2593%25BE%25E6%258E%25A5)，它同时也解释了为什么 lodash 不对 Error 和 Function 类型进行拷贝。

当然，设置一个哈希表存储已拷贝过的对象同样可以达到同样的目的：

```
function deepClone(obj, hash = new WeakMap()) {
    if (!isObject(obj)) {
        return obj
    }
    // 查表
    if (hash.has(obj)) return hash.get(obj)

    let isArray = Array.isArray(obj)
    let cloneObj = isArray ? \[\] : {}
    // 哈希表设值
    hash.set(obj, cloneObj)

    let result = Object.keys(obj).map(key => {
        return {
            \[key\]: deepClone(obj\[key\], hash)
        }
    })
    return Object.assign(cloneObj, ...result)
}
```

这里我们使用 WeakMap 作为哈希表，因为它的键是弱引用的，而我们这个场景里键恰好是对象，需要弱引用。

2.键值不是字符串而是 Symbol

我们修改一下测试用例：

```
var test = {}
let sym = Symbol('我是一个Symbol')
test\[sym\] = 'symbol'

let result = deepClone(test)
console.log(result)
console.log(result\[sym\] === test\[sym\])
```

运行 for...in 实现的深拷贝我们会发现：

  

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy80NzYyMDI4LTRmYTFiM2RiMDIyOTRkYzIucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXAlN0NpbWFnZVZpZXcyLzIvdy8yMjcvZm9ybWF0L3dlYnA?x-oss-process=image/format,png)

拷贝失败了，为什么？

因为 [Symbol](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FGlossary%2FSymbol) 是一种特殊的数据类型，它最大的特点便是独一无二，所以它的深拷贝就是浅拷贝。

但如果这时我们使用 Reflect 实现的版本：

  

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy80NzYyMDI4LTliMDI0NjIxODJkNzgyZTIucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXAlN0NpbWFnZVZpZXcyLzIvdy8yODkvZm9ybWF0L3dlYnA?x-oss-process=image/format,png)

成功了，因为 for...in 无法获得 Symbol 类型的键，而 [Reflect](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FReflect%2FownKeys) 是可以获取的。

当然，我们改造一下 for...in 实现也可以：

```
function deepClone(obj) {
    if (!isObject(obj)) {
        throw new Error('obj 不是一个对象！')
    }

    let isArray = Array.isArray(obj)
    let cloneObj = isArray ? \[\] : {}
    let symKeys = Object.getOwnPropertySymbols(obj)
    // console.log(symKey)
    if (symKeys.length > 0) {
        symKeys.forEach(symKey => {
            cloneObj\[symKey\] =  isObject(obj\[symKey\]) ? deepClone(obj\[symKey\]) : obj\[symKey\]
        })
    }
    for (let key in obj) {
        cloneObj\[key\] = isObject(obj\[key\]) ? deepClone(obj\[key\]) : obj\[key\]
    }

    return cloneObj
}
```

1.  拷贝原型上的属性
    

众所周知，JS 对象是基于原型链设计的，所以当一个对象的属性查找不到时会沿着它的原型链向上查找，也就是一个非构造函数对象的 [\_\_proto\_\_](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FObject%2Fproto) 属性。

我们创建一个 childTest 变量，让 result 为它的深拷贝结果，其他不变：

```
let childTest = Object.create(test)
let result = deepClone(childTest)
```

这时，我们最初提供的四种实现只有 for...in 的实现能正确拷贝，为什么呢？原因还是在[结构化克隆算法](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FGuide%2FAPI%2FDOM%2FThe_structured_clone_algorithm%23%25E7%259B%25B8%25E5%2585%25B3%25E9%2593%25BE%25E6%258E%25A5)里：原形链上的属性也不会被追踪以及复制。

落在具体实现上就是：for...in 会追踪原型链上的属性，而其它三种方法(Object.keys、Reflect.ownKeys 和 JSON 方法)都不会追踪原型链上的属性：

  

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy80NzYyMDI4LWVkODEzMmYyYWRmZDU2MTIucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXAlN0NpbWFnZVZpZXcyLzIvdy8zMDUvZm9ybWF0L3dlYnA?x-oss-process=image/format,png)

2.需要拷贝不可枚举的属性  
第四种情况，就是我们需要拷贝类似属性描述符，setters 以及 getters 这样不可枚举的属性，一般来说，这就需要一个额外的不可枚举的属性集合来存储它们。类似在第二种情况使用 for...in 拷贝 Symbol 类型键时：  
我们给 test 变量里的 obj 和 arr 属性定义一下属性描述符：

```
Object.defineProperties(test, {
    'obj': {
        writable: false,
        enumerable: false,
        configurable: false
    },
    'arr': {
        get() {
            console.log('调用了get')
            return \[1,2,3\]
        },
        set(val) {
            console.log('调用了set')
        }
    }
})
```

然后实现我们的拷贝不可枚举属性的版本：

```
function deepClone(obj, hash = new WeakMap()) {
    if (!isObject(obj)) {
        return obj
    }
    // 查表，防止循环拷贝
    if (hash.has(obj)) return hash.get(obj)

    let isArray = Array.isArray(obj)
    // 初始化拷贝对象
    let cloneObj = isArray ? \[\] : {}
    // 哈希表设值
    hash.set(obj, cloneObj)
    // 获取源对象所有属性描述符
    let allDesc = Object.getOwnPropertyDescriptors(obj)
    // 获取源对象所有的 Symbol 类型键
    let symKeys = Object.getOwnPropertySymbols(obj)
    // 拷贝 Symbol 类型键对应的属性
    if (symKeys.length > 0) {
        symKeys.forEach(symKey => {
            cloneObj\[symKey\] = isObject(obj\[symKey\]) ? deepClone(obj\[symKey\], hash) : obj\[symKey\]
        })
    }

    // 拷贝不可枚举属性,因为 allDesc 的 value 是浅拷贝，所以要放在前面
    cloneObj = Object.create(
        Object.getPrototypeOf(cloneObj),
        allDesc
    )
    // 拷贝可枚举属性（包括原型链上的）
    for (let key in obj) {
        cloneObj\[key\] = isObject(obj\[key\]) ? deepClone(obj\[key\], hash) : obj\[key\];
    }

    return cloneObj
}
```

结果：

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy80NzYyMDI4LWZlNTk4ZGVkYjliNjUzMTYucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXAlN0NpbWFnZVZpZXcyLzIvdy85MDUvZm9ybWF0L3dlYnA?x-oss-process=image/format,png)

### 结语

1.  日常深拷贝，如只有一层可使用object.assign，深层建议序列化反序列化方法。
    
2.  面试时遇见面试官搞事情，写一个能拷贝自身可枚举、自身不可枚举、自身 Symbol 类型键、原型上可枚举、原型上不可枚举、原型上的 Symol 类型键，循环引用也可以拷的深拷贝函数：
    

```
// 将之前写的 deepClone 函数封装一下
function cloneDeep(obj) {
    let family = {}
    let parent = Object.getPrototypeOf(obj)

    while (parent != null) {
        family = completeAssign(deepClone(family), parent)
        parent = Object.getPrototypeOf(parent)
    }

    // 下面这个函数会拷贝所有自有属性的属性描述符,来自于 MDN
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    function completeAssign(target, ...sources) {
        sources.forEach(source => {
            let descriptors = Object.keys(source).reduce((descriptors, key) => {
                descriptors\[key\] = Object.getOwnPropertyDescriptor(source, key)
                return descriptors
            }, {})

            // Object.assign 默认也会拷贝可枚举的Symbols
            Object.getOwnPropertySymbols(source).forEach(sym => {
                let descriptor = Object.getOwnPropertyDescriptor(source, sym)
                if (descriptor.enumerable) {
                    descriptors\[sym\] = descriptor
                }
            })
            Object.defineProperties(target, descriptors)
        })
        return target
    }

    return completeAssign(deepClone(obj), family)
}
```

 3\. 有特殊需求的深拷贝，建议使用 lodash 的 copyDeep 或 copyDeepWith 方法。