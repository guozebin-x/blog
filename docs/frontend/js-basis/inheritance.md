# 继承

**1.原型链继承**

```
function SuperType(){
   this.property = true;
}
SuperType.prototype.getSuperValue = function(){
   return this.property;  
}
function SubType(){
   this.subproperty = false;
}
SubType.prototype = new SuperType(); // 继承的关键
SubType.prototype.getSubValue = function(){
   return this.subproperty;
}
var instance = new SubType();
alert(instance.getSuperValue()); // true
```

弊端：

①由于包含引用类型值的原型属性会被所有实例共享，这样容易导致修改一个实例的引用值另一个也会被修改。

②创建子类型的实例时，并不能在不影响所有对象实例的情况下给超类型的构造函数传递参数。

**2.借用构造函数继承**

也叫伪造对象或经典继承  
基本思想：在子类型构造函数内部调用超类型构造函数。

```
function SuperType(name) {
    this.colors = \['red', 'black', 'blue'\];
    this.name = name;
}
function SubType(name) {
    SuperType.call(this, name);
}
SuperType.prototype.getName = function () {
    console.log(this.name);
};
var instance1 = new SubType('instance1');
instance1.colors.push('green');
var instance2 = new SubType('instance2');
console.log(instance1.colors); // red,black,blue,green
console.log(instance2.colors); // red,black,blue
console.log(instance1.name); // instance1
console.log(instance2.name); // instance2
instance1.getName(); // error
instance2.getName(); // error
```

弊端：无法实现函数复用 

**3.组合式继承**

将原型链继承与构造函数结合起来，也叫伪经典继承，它是最常用的的继承方式。

基本思想：使用原型链实现对原型属性和方法的继承，借用构造函数实现对实例属性的继承。

```
function SuperType(name){
    this.name = name;
    this.colors = \['red','blue','green'\];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
};
function SubType(name, age) {
    SuperType.call(this,name); // 继承构造函数上属性，第二次调用
    this.age = age;
}
SubType.prototype = new SuperType(); // 继承原型上的属性，第一次调用
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    console.log(this.age);
};
var instance1 = new SubType("instance1", 29);
instance1.colors.push('black');
console.log(instance1.colors); // red,blue,green,black
instance1.sayName(); //instance1
instance1.sayAge(); // 29
var instance2 = new SubType("instance2", 27);
console.log(instance2.colors); // red,blue,green
instance2.sayName(); // instance2
instance2.sayAge(); // 27
```

弊端：无论什么情况下，都会调用两次超类型构造函数。一次在创建子类型的原型时；一次在子类型构造函数内部。

**4.原型式继承**

基本思想：借助原型可以基于已有的对象创建新对象，不必因此创建自定义类型。

```
var person = {
  name: 'Nicholas',
  friends: \["Shelby","Court","Van"\]
};
var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends); // Shelby,Court,Van,Rob,Barbie
console.log(anotherPerson.friends);
// Shelby,Court,Van,Rob,Barbie
console.log(yetAnotherPerson.friends); 
// Shelby,Court,Van,Rob,Barbie
```

**5.寄生式继承**

基本思想：创建一个仅用于封装继承过程的函数，在内部对对象做相关操作，然后返回。

```
function createObj(o){  
    function F(){ }  
    F.prototype=o ; 
    return new F()  
}

function createObj2(o){  
    var obj = createObj(o) ; 
    obj.sayHi = function(){  }  
    return obj 
}

    var obj = { name:"zs" , age:18, sayHi:function(){ }  }

    var newObj = createObj2(obj)
```

这样做使anotherPerson对象不仅有了person的属性方法，还有了自己的方法。但是这样做相当于构造函数那样，并不是真正的函数复用。而且包含引用类型值的属性依然始终共享相应的值。

**6.寄生组合式继承（组合继承+寄生继承）**

这个方法属于比较完美的方法。

```
function SuperType(name) {
    this.name = name;
    this.colors = \["red","blue","green"\];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
};
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
function inheritPrototype(subType, superType) {
    var prototype = Object.create(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}
inheritPrototype(SubType,SuperType);

SubType.prototype.sayAge = function () {
    console.log(this.age);
};
```

**7、class继承**

```
class Point{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point{
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}
```