# 声明提升

在es6中新增了let，const，class这三个关键字，js用来声明的关键字有了var，function，let，const，class五个。

我们都知道，在es5中，变量和函数的声明都会提升。

**es5中的代码执行顺序是这样的：**

1.首先查找所有的函数声明（function关键字），初始化函数体，如果有同名的则进行覆盖

2.查找变量声明（var关键字），初始化为undefined，如果有同名的则跳过，什么也不干

在es6中新增了let，const，class这三个用来声明的关键字。let和const，这两个关键字的用法基本相同，区别是let声明变量，const声明常量。在官方文档对这两个关键字的用法中说这两个关键字并不存在声明提升，只是存在暂时性死区，但声明真的不提升吗？暂时性死区是怎么来的？看下面的代码：

```
x = "global";
// function scope:
(function() {
    x; // not "global"

    var/let/… x;
}());
// block scope (not for \`var\`s):
{
    x; // not "global"

    let/const/… x;
}
```

 所以，let应该是提升的，但这个提升跟var的又不一样。同理，const也是这样的。重点来了，下面我们来分析一下这些声明关键字的执行过程。

**var 声明的「创建、初始化和赋值」过程**

假设有如下代码：

```
function fn(){
  var x = 1
  var y = 2
}
fn()
```

在执行 fn 时，会有以下过程（不完全）：

1.  进入 fn，为 fn 创建一个环境。
    
2.  找到 fn 中所有用 var 声明的变量，在这个环境中「创建」这些变量（即 x 和 y）。
    
3.  将这些变量「初始化」为 undefined。
    
4.  开始执行代码
    
5.  x = 1 将 x 变量「赋值」为 1
    
6.  y = 2 将 y 变量「赋值」为 2
    

也就是说 var 声明会在代码执行之前就将「创建变量，并将其初始化为 undefined」。

这就解释了为什么在 var x = 1 之前 console.log(x) 会得到 undefined。

  

**接下来来看 function 声明的「创建、初始化和赋值」过程**

假设代码如下：

```
fn2()

function fn2(){
  console.log(2)
}
```

JS 引擎会有一下过程：

1.  找到所有用 function 声明的变量，在环境中「创建」这些变量。
    
2.  将这些变量「初始化」并「赋值」为 function(){ console.log(2) }。
    
3.  开始执行代码 fn2()
    

也就是说 function 声明会在代码执行之前就「创建、初始化并赋值」。

  

**接下来看 let 声明的「创建、初始化和赋值」过程**

假设代码如下：

```
{
  let x = 1
  x = 2
}
```

我们只看 {} 里面的过程：

1.  找到所有用 let 声明的变量，在环境中「创建」这些变量
    
2.  开始执行代码（注意现在还没有初始化）
    
3.  执行 x = 1，将 x 「初始化」为 1（这并不是一次赋值，如果代码是 let x，就将 x 初始化为 undefined）
    
4.  执行 x = 2，对 x 进行「赋值」
    

这就解释了为什么在 let x 之前使用 x 会报错：

```
let x = 'global'
{
  console.log(x) // Uncaught ReferenceError: x is not defined
  let x = 1
}
```

原因有两个：

1.  console.log(x) 中的 x 指的是下面的 x，而不是全局的 x
    
2.  执行 log 时 x 还没「初始化」，所以不能使用（也就是所谓的暂时死区）
    

看到这里，你应该明白了 let 到底有没有提升：

1.  let 的「创建」过程被提升了，但是初始化没有提升。
    
2.  var 的「创建」和「初始化」都被提升了。
    
3.  function 的「创建」「初始化」和「赋值」都被提升了。
    

  

再看 const，其实 const 和 let 只有一个区别，那就是 const 只有「创建」和「初始化」，没有「赋值」过程。

class类似于function，这里也不再多说。相信到这里，你对声明提升已经有了深入的了解，

重要参考：[https://zhuanlan.zhihu.com/p/28140450](https://zhuanlan.zhihu.com/p/28140450)