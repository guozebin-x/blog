### 作用域链和闭包

在es5中没有块级作用域，只有函数作用域与全局作用域，作用域是链式的，内层函数可以访问到外层函数中的变量，外层函数访问不到内层函数中的变量。es6中添加了块级作用域。

**1.在函数作用域外部无法访问到函数内部变量,内部可以访问到外部的变量**

```
var height = 100
function add() {
  console.log(height); //100
  var color = "aa";
}
add();
console.log(color); //undefind
```

全局变量height在代码执行时就进入内存中，被创建并赋值，并一直保存在内存中，在函数中可以被获取到。局部变量color在add函数执行时才进入内存中被创建并赋值，执行结束后就被销毁，所以我们在函数执行后获取不到color。

**2.不使用var直接赋值会将变量定义为全局变量**

```
function add() {
  color = "aa"; //直接赋值定义为全局变量
}
add();
console.log(color); //a
```

这段代码中，函数执行后变量color进入内存中，执行后color并不销毁，所以在函数执行后可以获取到color。但并不推荐这种不声明变量直接赋值的写法，这在严格模式中会报错。

**下面来看一道经典笔试题：**

```
function exc() {
    var a = b = 5;
}
exc();
console.log(b);  //?
```

 在这段代码中，给a和b进行了连续赋值，但a有var关键字，b没有，所以b被声明为全局变量，输出5。 

**3.当我们需要访问函数作用域内部的值时怎么办呢？可以像下面这么写**

```
function add() {
  var color = "aa"; 
  function ad() {
    return color;
  }
   return ad();
}
var x=add(); 
x() //aa
```

我们在add函数内部定义了一个函数ad，返回变量color，这样我们就在函数外部获取到了变量color，但这同时使得color一直保存在内存中不被销毁，其实就是一个闭包。

### **es5中无块级作用域带来的影响**

**来看下面这个典型的例子：**

页面上有五个li标签，想要给每个li标签都定义一个点击事件，点击第几个li标签，提示框就弹出几。

```
var aLi = document.querySelectorAll('li');
 for (var i = 0; i <= aLi.length; i++) {    
  aLi\[i\].onclick = function() {   
   alert(i);   
  } 
}
```

我们在代码中进行了循环定义，看起来仿佛大功告成了，但在运行时你会发现，不管点击哪个li标签，都会弹出5，这是什么情况？这就是没有块级作用域带来的影响，当点击一个li标签时，就会执行函数，弹出变量i，上面我们已经知道函数中的变量是在执行时才被创建并赋值，我们可以看到函数中并没有i，所以执行时i的值必然来源于它的上级作用域，在这里也就是全局作用域，全局作用域中i是几呢？在我们点击li标签调用这个函数时，很明显全局作用域中的循环已经结束，所以全局作用域中i的值为5，这就导致了我们不管点击哪个li标签都会弹出5。

**再来看下面这道笔试常考题：**

```
for( var i = 0;i<5;i++) {
    setTimeout(function() {
        console.log(i);
    }，1000)
}//5,5,5,5,5
```

这道题和我们上面举的例子原理相同，因为setTimeout是异步执行（在js的运行原理中已经详细讲解过），当setTimeout内的函数执行时，全局作用域中的i已经是5了。这两个例子中的问题如何解决呢？这就用到了闭包。

**闭包**
------

**闭包简介**

**一个函数执行后就会被销毁，但会有这样一种情况，一个函数中还有一个函数，暂且将他们叫做内层函数与外层函数，内层函数使用了外层函数中的变量，首先我们执行外层函数，然后执行其内层函数，外层函数执行后其中的变量本应该被销毁，但由于其内层函数也被执行了，内层函数的执行依赖外层函数的变量，这就导致了外层函数无法被垃圾回收机制回收。这个内层函数和其依赖的无法被回收的执行环境就被称为闭包。**

很多同学会说函数内的函数在外层函数执行完不也被销毁了，怎么执行？内层函数执行方式有三种：

①在函数内自执行②return返回内层函数③将内层函数赋值给全局变量

**闭包的作用**

闭包可以捕获到局部变量和参数的外部函数绑定，即便外部函数的调用已经结束。

**何时使用闭包**

1.将一个变量长期保存在内存中

这其实就是给页面上五个li标签定义点击事件问题的解决方法，使每次循环的i都保存在内存中。

```
var aLi = document.querySelectorAll('li');
 for (var i = 0; i <= aLi.length; i++) {  
 (function(j){  
  aLi\[j\].onclick = function() {   
   alert(j);   
    }
  })(i)
}
```

2.避免全局变量污染

```
function f1(){
　　var n=1;
　　nAdd=function(){n+=1}
　　function f2(){
　　　　alert(n);
　　}
　　　　return f2;
}
　　var result=f1();
　　result(); // 1
　　nAdd();
　　result(); // 2
```

3.定义私有成员

```
var aaa = (function(){
        var a = 1;
        function bbb(){
                a++;
                alert(a);
        }
        function ccc(){
                a++;
                alert(a);
        }
        return {
                b:bbb,            
                c:ccc
        }
})();
aaa.b();     //2
aaa.c()      //3
```

4.使内层函数this指向全局

在函数外层包裹一个函数，使内部函数的this指向全局，这当中并不产生无法被回收的变量，这种闭包就是一种广义的闭包。

下面这段代码中我们给一个按钮定义了一个点击事件，想要在点击后弹出"clickevent"。

```
var handler = {
    message: "clickevent"，
    handlerClick: function(event) {
        alert(this.message)
    }
}
var btn = document.getElementById('My-btn');
EventUtil.addHandler(btn,"click", handler.handlerClick)
//EventUtil为跨浏览器事件对象
```

但运行后你会发现是undefined，因为this指向的是btn这个DOM对象而不是handler。解决方法就是在handler.handleClick外加了一个匿名函数，使得其中的this指向全局。

```
var handler = {
    message: "clickevent",
    handlerClick: function(event) {
        alert(this.message)
    }
}
var btn = document.getElementById('My-btn');
EventUtil.addHandler(btn,"click",function(event){
    handler.handlerClick(event);
})
```

**闭包的应用 **

我们对闭包已经有了大概的了解，现在来看看如何使用闭包来改写前面无法按预期执行的两段代码。

```
for (var i =1; i<=5;i++){
    (function (j) {
        setTimeout(function timer() {
            console.log(j)
        });
    })(i);
}
```

经过这样的改写之后，这两段代码已经可以按预期运行了。在本来的函数外层加了一个立即执行的匿名函数，内部函数引用外层匿名函数中的变量，使得每一次循环产生的i都无法被垃圾回收机制回收，形成闭包。

ES6的变化
======

es6规范中增加了块级作用域，新增了箭头函数可以绑定this指向，这使得闭包的应用大大减少，上面示例中的所有情形几乎都可以用箭头函数和let来解决，这并不困难，在这里不再赘述。虽然es6大大简便了我们的语法，但我们仍然应该对于闭包有着深入的理解，因为闭包的底层实现仍然是相同的。

```
var a = \[\];
for (let i = 0; i < 10; i++) {
    setTimeout(function timer() {
            console.log(i)
    }
}
a\[1\]();     //1
```