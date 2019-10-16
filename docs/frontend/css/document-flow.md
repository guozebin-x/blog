# 文档流

### 1.什么是文档流？

将窗体自上而下分成一行行, 并在每行中按从左至右的顺序排放元素,即为文档流.(自己的理解是从头到尾按照文档的顺序，该在什么位置就在什么位置，也可以按照上面的意思理解，自上而下，自左到右的顺序)

### 2.position

**概述：**

position定位，它的作用就是把元素放到你想放的位置上。在css中牵扯到位置定位的一般就会有一个参照，position也不例外，它的取值有三个：relative|absolute|fixed，这三个中每一个都有一个定位参照物。应用于定位参照物的配套属性有：top、right、bottom、left、z-index，这些属性如果没有设置position的情况下使用是不会起作用的。每条属性的含义都是定位元素对应边相对于参照物的对应边的间隔距离，数值可以为负。不同的position不但它的参照物不同，还会有一些自己特有的性质。有时候定位元素没有设置宽或者高，而在定位的时候又同时设置了right、left或者top、bottom这种属性，那么这种情况下会把定位元素拉宽或者拉高。

absolute

生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

fixed

生成固定定位的元素，相对于浏览器窗口进行定位。

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

relative

生成相对定位的元素，相对于其正常位置进行定位。

因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。

static

默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

sticky

粘性定位，该定位基于用户滚动的位置。

它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。

**注意: **Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix (查看以下实例)。

**1.position：relative**

这种定位称为相对定位。当把一个元素设置为相对定位的时候，这个元素仍在在文档流中并没有脱离文档流，父元素的内容区和其他元素还是像在正常文档流中一样可以感觉到它的存在，相对定位一般是作为绝对定位的参照物使用。

相对定位需注意三点：

①它的z-index层级比其他元素高

②它原来的位置就是定位参照物，设置的top、right等属性都是相对于原来位置的

③当定位的元素相对于原来的位置偏移的时候，他所占用的位置空间还是保留在那里不变的

**2.position：absolute**

这种定位称为绝对定位，把一个元素设置为绝对定位的时候，这个元素就完全脱离了文档流

绝对定位需注意三点：

①不论它原来是什么类型的元素，现在都是块级元素

②它的定位参照物是第一个相对定位的祖先元素，如果没有则为根元素，若要相对于父元素定位的话就把父元素设置为relative

③父元素和其他子元素看不到它的存在，所以父元素可能height会变小，而其他元素会占据他原来的位置，同时自己的宽度也会变为内容宽度

**3.position：fixed**

这种定位称为固定定位，fixed的定位方式和absolute的定位方式是差不多的，也会脱离文档流，区别是它的参照物是浏览器窗口。

**4.position：sticky**

sticky的定位方式它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。

  

**示例：**

1.各定位方式区别

```
<style>
*{
    margin: 0;
    padding: 0;
}
.div1{
    position: relative;
    left: 100px;
    top: 100px;
    width: 100px;
    height: 100px;
    background-color: red; 
}
.div2{
    position: absolute;
    left: 100px;
    top: 100px;
    width: 200px;
    height: 100px;
    background-color: blue;  
}
.div3{
    position: fixed;
    left: 300px;
    top: 300px;
    width: 100px;
    height: 100px;
    background-color: yellow;  
}
</style>

    <div class="div1">
        relative
        <div class="div3">fixed</div>
        <div class="div2">absolute</div>
    </div>
```

![](https://img-blog.csdnimg.cn/201811251622207.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjM1MTY3,size_16,color_FFFFFF,t_70)

可以看到absolute是相对于relative来进行定位的，fixed是相对于浏览器窗口来定位的。

2.脱离文档流

```
<style>
.div1{
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
}
.div2{
    width: 200px;
    height: 100px;
    background-color: blue;
}
</style>

<body>
    <div class="div1">1</div>
    <div class="div2">2</div>
</body>
```

  

![](https://img-blog.csdnimg.cn/20181123122102669.png)

可以看到div1覆盖在了div2的上面，因为div1已经脱离了文档流。

### float

**概述：**

所有元素都可以设置浮动，一旦元素浮动后，就会变成一个块级元素，并且它的宽度会尽可能的窄。它是使元素脱离文档流的两种方法之一，可以实现两个块级元素的同行显示。当一个元素浮动的时候，它其实是半脱离文档流的。这里的半脱离文档流可以这么理解，首先是脱离文档流，这个是说这个浮动元素在包含快的内容区域中已经不占用空间了，后续元素和包含块的内容区感觉不到它的存在，所以后续元素会适当的占据它的位置或者父元素的高度会发生变化。而个“半”字是说这个浮动元素并不是像定位一样感觉不到其他元素的存在想放哪里放哪里，并且也不是对其他元素没有任何其他影响的。首先这个浮动元素是不能超出其包含块的（包含块就是其最近的块级祖先元素），其次是其他元素对浮动元素的位置是有影响的（尤其体现在向上浮动的时候），最后浮动元素和其他元素的内容是相互可以感觉到对方的存在的，所以是半脱离文档流。同时在一个包含块中的所有浮动元素又都是在同一个文档流中的，也就是彼此之间不会覆盖，他们之间的padding、border、margin是相互之间都有效的并且margin不会合并。

  
**带来的影响：**浮动的样式声明为float，它只有两个可以产生作用的值：right、left。这两个值设置了元素水平移动的大方向，向左或者向右。但这并不是说它在垂直方向上是不移动的，稍微动手写个例子就会发现总觉得浮动元素有往上跑的趋势，这就说明了浮动元素默认总是同时向上移动的，并且不能修改。这也是浮动元素有些复杂的地方，因为浮动元素对待前面的元素和对待后面的元素是不一样的并且css规范对浮动元素的向上移动也做了很多限制，会有不同的情况。浮动元素总是能感到前面的元素存在的（这也是半脱离文档流的原因之一），例如一个浮动元素上面有一个块级元素那么它是不会向上移动并覆盖那个块级元素的，相反，后续块级元素感觉不到浮动的存在会移动过去并且被浮动元素覆盖掉，当然内容是不会覆盖掉的（半脱离文档流的原因之二）。所以浮动元素对于其前面的元素表现的就好像inline-block一样。若前面没有任何元素，那么浮动元素则向上移动到包含块的内容区顶点为止（半脱离文档流的原因之三）。向上浮动还需要注意一点就是浮动元素的顶端不能比之前所有浮动元素的顶端更高。

因为浮动是半脱离文档流的，父元素的内容区是感觉不到它的存在的，所以父元素的高度可能会塌陷，导致浮动元素的部分跑到父元素的外面，这是不希望看到的结果。这时候就需要用到清除属性clear了。clear只能作用于块级元素，它的作用就是为了不让内容围绕在浮动元素周围，是使浮动元素对于设置了清楚浮动的内容来说表现的像一个块级元素一样，是该内容换到浮动的下一行。这样就可以增加父元素的高度是浮动元素完全在父元素之中了。一般的写法是为父元素添加一个样式，具体可以看清除浮动那一篇文章：

```
.cleafix::after {
    content:'.';
    display:block;
    visiable:hidden;
    overflow:hidden;
    height:0;
    clear:both;
}
```

**总结为以下几点：**

1.设置浮动后变为块级元素，宽度尽可能的窄

2.一个块中所有浮动元素在一个文档流中，margin不会合并

3.浮动在垂直方向上总有向上跑的趋势，浮动元素会感知到它之前的元素，不会将其覆盖，但浮动元素之后的元素感知不到浮动元素，会将其覆盖

4.其他非浮动元素中的内容可以感知到浮动元素的存在

**示例：**

 1.我们先来看看左右浮动：

```
<style>
.div1{
    width: 100px;
    height: 100px;
    background-color: red;
    float:left;
}
.div2{
    width: 200px;
    height: 100px;
    background-color: blue;
    float:right;
}
</style>

<body>
    <div class="div1">1</div>
    <div class="div2">2</div>
</body>
```

  

![](https://img-blog.csdnimg.cn/20181123114856902.png)

2.再来看看半脱离文档流和全脱离的区别： 

```
<style>
.div1{
    width: 100px;
    height: 100px;
    background-color: red;
    float:left;
}
.div2{
    width: 200px;
    height: 100px;
    background-color: blue;
}
</style>

<body>
    <div class="div1">1</div>
    <div class="div2">2</div>
</body>
```

它的效果是这样的： 

![](https://img-blog.csdnimg.cn/20181123120545815.png)

可以看到div1覆盖在了div2上，但div2中的内容“2”,并没有被遮挡，这说明div2的内容能感受到div1的存在。

3.我们换一下设置浮动的元素，将div2设为浮动。

```
<style>
.div1{
    width: 100px;
    height: 100px;
    background-color: red; 
}
.div2{
    width: 200px;
    height: 100px;
    background-color: blue;
    float:left;
}
</style>
```

它的效果是这样的：  

![](https://img-blog.csdnimg.cn/20181124213908634.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjM1MTY3,size_16,color_FFFFFF,t_70)

div2浮动在了div1之下，并没有覆盖在div1之上，与上一例子对比说明浮动的元素对它前面的元素和后面的元素来说是不一样的。