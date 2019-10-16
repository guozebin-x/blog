# 原型链
在讲原型链之前，我们先要了解对象和原型对象。

### 对象

每个普通对象都有一个名为\_proto\_的内部属性，指向它所对应的构造函数的原型对象，原型链基于\_proto\_。

```
var o2 = {};
console.log(o2)
```

![](https://img-blog.csdnimg.cn/20181102101551599.png)

```
  b=\[1,2,3\]
  console.log(b)
```

![](https://img-blog.csdnimg.cn/20181102103843808.png)

### 原型对象

每一个函数都有一个原型对象，函数都有prototype属性，它指向函数的原型对象。

```
function f1(){};
console.log(f1.prototype);
```

![](https://img-blog.csdnimg.cn/20181102100749320.png)

可以看到原型对象中也有\_proto\_,因为原型对象也是一个对象，\_proto\_指向了Object。

除了\_proto\_之外，prototype还有一个construtor，这又是什么呢？它同样是一个指针，指向函数，也就是**f1.prototype.construtor === f1。**

原型对象什么时候会用到呢？我们先了解下构造函数是什么，构造函数与其他函数唯一的区别在于调用方式不同。任何函数只要通过new来调用就可以作为构造函数，它是用来创建特定类型的对象。

下面定义一个构造函数Animal：

```
function Animal (name){

     this.name = name;

     this.species = '动物';  

 }
```

通过new命令来生成一个Animal实例：

var cat = new Animal ("猫")

这里，构造函数Animal就是实例对象cat的原型。Animal里的this关键字就指的是cat这个对象。new出来的cat对象此时已经和Animal再无联系了，也就是说每一个new出来的实例都有自己的属性和方法的副本，是独立的！修改其中一个不会影响另一个。

```
var dog = new Animal("狗");

console.log(cat.species)      // 动物

console.log(dog.species)      // 动物
```

但是，我们希望构造函数中的species属性是一个共有属性。上面的方法中，每个实例中都有一个相同的species属性，会造成资源的浪费，因为每个实例中的这个共有属性都要占用内存，创建100个实例同样也创建了100个species属性。我们是否可以创建一次species属性，让所有实例化的对象都可以用呢？

那么原型对象就即将登场了！我们把需要共享的放到原型对象里，把那些不需要共享的属性和方法存在构造函数里。

那么上面的代码怎么修改呢？

```
function Animal(name) {
    this.name = name;
}
Animal.prototype.species = '动物';

var cat = new Animal("猫");

var dog = new Animal("狗");

console.log(cat.species) // 动物

console.log(dog.species) // 动物

Animal.prototype.species = '食肉动物';

console.log(cat.species) // 食肉动物

console.log(dog.species) // 食肉动物
```

可以看出，修改prototype属性会影响它的所有实例的species的值。

实例一旦创建出来就会自动引用prototype对象的属性和方法！所以实例对象的属性和方法一般分为两种：一种是自身的，一种是引用自prototype的。

具体实现是这样的：

每当代码读取某个对象的某个属性的时候，都会执行一次搜索。首先从对象实例本身开始，如果在实例中找到了该属性，则返回该属性的值，如果没有找到，则顺着原型链指针向上，到原型对象中去找，如果找到就返回该属性值。

  

### **原型链**

看到这里，应该对原型链已经有了大概的了解，我们来总结梳理一下。

首先是原型链依赖的两个属性：

\_\_proto\_\_：每个对象都有，原型链基于\_\_proto\_\_

prototype：是函数的原型对象，也有\_\_proto\_\_属性，还有一个constructor属性，指向函数

然后来看一个的原型链：

```
function A(){};
var a=new A()
console.log(a.\_\_proto\_\_.\_\_proto\_\_.\_\_proto\_\_);  //null
```

![](https://img-blog.csdnimg.cn/20181102135519983.png)

  

js中是如何通过原型来实现继承的呢？来看下面的代码:

```
function AA(){
    this.name="xxx";
    this.age=18
}
function BB(){
    this.sex="man";
}
BB.prototype=new AA();  //实现继承
var gzb=new BB();
console.log(gzb.name); //xxx
console.log(gzb.age); //18
console.log(gzb.sex); //man
```

关键在于BB.prototype=new AA();这行代码中以new的方式调用了AA（），使BB函数的原型成为了AA（）的一个实例对象，重写了BB函数的原型对象，实现了继承。

如果我们也在BB函数中也添加一个name属性，那获取gzb.name时会输出什么呢？

```
function BB(){
    this.sex="man";

    this.name="zzz";
}

gzb.name  //"zzz"
```

我们在访问name属性时，首先会查找实例对象中是否存在这个属性，如果存在直接返回，如果没有会沿着原型链向上寻找，查看原型对象中是否存在这个属性，如果有则返回，如果没有则返回undefined。