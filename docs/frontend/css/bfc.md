# BFC

BFC 即 Block Formatting Contexts (块级格式化上下文)，具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。通俗一点来讲，可以把 BFC 理解为一个封闭的大子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。就像js的函数作用域一样，BFC是页面上的作用域。

**1.触发BFC**

只要元素满足下面任一条件即可触发 BFC 特性：

1.  body 根元素
    
2.  浮动元素：float 除 none 以外的值
    
3.  绝对定位元素：position (absolute、fixed)
    
4.  display 为 inline-block、table-cells、flex
    
5.  overflow 除了 visible 以外的值 (hidden、auto、scroll)
    

也就是脱离文档流的元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子

**2.BFC特性**

 （1）同一个 BFC 下外边距会发生折叠

```
<style>
div{
    width: 100px;
    height: 100px;
    background: blue;
    margin: 100px;
}
</style>
<body>
    <div></div>
    <div></div>
</body>
```

如果我们不了解BFC的话，会认为两个div之间的距离为200px，但其实这两个div之间的距离只有100px，因为外边距发生了折叠，这是css的一种规范。

 （2）BFC 可以包含浮动的元素（清除浮动）

这里所说的，就是上面方法四和方法五中的原理了，触发BFC后，容器将会包裹着浮动元素。在方法四五中使用了overflow属性，也就是我们上面所说的触发BFC条件中的第五条。

 （3）BFC 可以阻止元素被浮动元素覆盖

来看下面这个例子：

```
<div style="height: 100px;
    width: 100px;
    float: left;
    background: blue">
    我是一个左浮动的元素
</div>
<div style="width: 200px; 
    height: 200px;
    background: #eee">
    我是一个没有设置浮动,也没有触发BFC元素
</div>
```

![](https://img-blog.csdn.net/20180924001818449?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjM1MTY3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)![](https://img-blog.csdn.net/20181023194708132?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjM1MTY3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

在这个例子中左浮动的元素会将其他元素覆盖，但我们并不想其他元素被覆盖，这时就可以使用BFC，给第二个元素加上overflow：hidden，即可让第二个元素不再被浮动元素所覆盖。附BFC详解地址：https://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html

