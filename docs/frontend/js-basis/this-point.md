# this指向

判断方法
----

**this永远指向一个对象，但普通函数与箭头函数this指向不同。**

**普通函数：**

**普通函数的this是动态的，由函数是如何被调用的来决定。**

**①this所在函数是否使用了new以构造函数方式来调用函数，如果是则指向新创建的对象**

**②this所在函数是否使用（对象.属性）的方式调用函数（如Obj.say），即函数为对象的属性，如何是则指向这个对象**

**③如果以上两条均不是则指向全局对象**

**箭头函数：**

**箭头函数的this是固定的，箭头函数本身没有this，它的this就是函数定义时的外层环境的this，如何外层仍然是箭头函数则继续向上查找，直到找到一个普通函数或到达全局对象，外层环境的this指向仍需要使用普通函数的判断方法来判断。**

### **误区**

在阮一峰老师的ES6中有这么一句话：

![](https://img-blog.csdnimg.cn/2018110620041916.png)

看完这句话很简单，仿佛就和其他面向对象语言一样，这直接指向定义时所处对象，但这句话是有问题，有歧义的，看下面的例子：

```
  var obj={
     say:()=>{
       console.log(this); 
     }
  }
obj.say()  //??
```

很多人一定会说，定义时所在的对象，那就是obj啊，这么简单。然而，这个this指向的是全局对象。this指向的是定义时的最近外层非箭头函数，很明显这个箭头函数外没有函数了，所以指向了全局。

来看下面改写后的例子。

```
  var obj = {
    say: function () {
      setTimeout(() => {
        console.log(this)
      });
    }
  }
  obj.say(); // obj
```

  

### **注意点**

在一些情况下全局对象并不是window，例如在VUE中全局对象为VUE实例。

**call，apply和bind的作用都是改变this指向，但使用方法不同。**

## 一.call和apply

call和apply其实是同一个东西，区别只有参数不同，call是apply的语法糖，所以就放在一起说了，这两个方法都是定义在函数对象的原型上的（[Function.prototype](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/Apply)），call和apply方法的作用都是改变函数中的this指向，第一个参数传入一个对象，然后传入函数执行所需的参数。传入call的参数只能是单个参数，apply可传入数组或类数组。话不多说直接上代码，看下面的例子：

1.

```
var ga = {
   x:1
}
function gb(y) {
   return this.x+y;
}
console.log(gb.call(ga,2));   //this指向了ga,结果为3
```

 上面的代码中由于gb函数执行依赖于ga中的x，所以我们使用了call使得gb中的this指向了ga。

2.

```
function gg(x,y,z){
    let a=Array.prototype.slice.call(arguments，1，2) //通过slice方法获取到了第二个参数
    return a; //返回\[2\]
}
gg(1,2,3)
```

 arguments是一个类数组对象，它本身不能调用数组的slice方法，使用call将执行slice方法的对象由数组变为了arguments。

3.

我们可以使用apply来改写上面的代码，传入一个数组。

```
function gg(x,y,z){
    let d=\[1,2\]
    let a=Array.prototype.slice.apply(arguments,d) //通过slice方法获取到了第二个参数
    return a; //返回\[2\]
}
gg(1,2,3)
```

  

### 二. bind

bind和apply区别是apply会立刻执行，而bind只是起一个绑定执行上下文的作用。看下面的例子：

```
var color = "red";
var o = { color: "blue" };
 
function sayColor(){
    alert(this.color);
} 
var objectSayColor = sayColor.bind(o);
objectSayColor();    //blue
```

在我们需要确保函数中的this一直指向某个对象时，就应该使用bind。