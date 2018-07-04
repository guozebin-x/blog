# JS基础

我们常说的JS（浏览器执行的JS）包含两部分：

- JS基础知识（ECMA262标准），基础语法，node遵循这个规范

- JS-Web-API（W3C标准），api，node不遵循W3C规范

## DOM

**DOM操作（Document Object Model）(数据结构：树)**

**浏览器把拿到的`html`代码，结构化成一个浏览器能识别并且`js`可操作的一个模型。**

```js
document.getElementById('app') // 元素
document.getElementsByTagName('div') // 集合
document.getElementsByClassName('.container') // 集合

var plist = document.querySelectorAll('p') // 集合
var p = plist[0]

p.getAttribute('style')
p.setAttribute('style', 'font-size:30px;')
```

**DOM结构操作**

```js
var app = document.getElementById('app') // 查找
 
var p =document.createElement('p') // 创建

app.appendChild(p) // 添加子元素
app.parentElement // 获取父元素
app.childNodes // 获取子元素
app.removeChild(p) // 移除子元素

// 移动元素：先获取元素，然后操作元素（比如append到别的元素）
```

#### attribute和property的区别

- property只是一个js对象的属性的修改

- attribute是对html标签属性的修改

## BOM

**BOM操作 (Browser Object Model)**

### navigator

```js
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```

### screen

```js
console.log(screen.width)
console.log(screen.height)
```

### location

```js
console.log(location.href) // 整个url
console.log(location.protocol) // 协议‘https://’
console.log(location.host) // 域名
console.log(location.pathname) // 路径 
console.log(location.search) // ?参数
console.log(location.hash) // #hash
```

### history

```js
history.back() // 后退
history.forward() // 前进
```

 ## 事件

### 事件绑定函数（代理）

```js
function bindEvent (elem, type, selector, fn) {
  if (fn === null) {
    fn = selector
    selector = null
  }

  elem.addEventListener(type, function (e) {
    var target
    if (selector) {
      // 代理
      target = e.target
      if (target.matches(selector)) { // selector是个css选择器字符串,返回ture/false
        fn.call(target, e)
      } else {
        fn(e )
      }
    }
  })

}
```

应用场景：比如，无限下拉加载图片的页面，绑定事件。

好处：代码简洁、减少浏览器渲染压力

## Ajax

**AJAX全称：异步的JavaScript和XML**

不是某种编程语言，是一种在无需重新加载整个页面情况下能够更新部分网页的技术。

 -  读音：ajax  阿贾克斯~ no！

 -  XMLHttpRequest对象：可以用于后台和服务器进行数据交换，对网页进行部分更新

**概念介绍**

 - 运用HTML和CSS来实现页面，显示信息；
   
 - 运用XMLHttpRequest对象和web服务器进行数据的异步交换；

 - 运用JavaScript操作DOM，实现动态局部刷新；

 

**一、关于XMLHttpRequest对象**

首先实例化对象：
  
```JS
var request = new XMLHttpRequest();
```

接下来就可以进行请求了，怎么请求呢？

**二、HTTP请求**

请求方式GET或POST：

get一般用于信息获取，用来查询，所有的变量都在URL中       

post：一般用于修改服务器上的资源。

URL

请求头，包括一些客户端环境信息，身份验证信息等

请求体，也就是正文

**三、HTTP响应**

一个数字和文字组成的状态码，用来显示请求成功与否：

200 OK      

404 NOT Found（客户端错误）  

500（服务器错误）

响应头，一些服务器信息日期类型等

响应体，正文

**四、XHR的方法**

open(method,url,async)方法        

methed:发送请求方式      

async：请求同步或异步  true异步   false同步  默认true一般不填写
            
send(string)发送方法           get一般没参数     post有参数
　　
request.open("POST","create.php",true);
      
request.setRequestHeader("Content-type","application/x-www-form-urlencoded");          这个方法说明提交类型，不提交文件一般用这个，写在上下两个方法中间
      
request.send("name=王二狗&sex=男"); 

**五、XHR响应**

readyState属性    （所以要监听这个属性的变化）

0：请求未初始化，open还没有调用

1：服务器链接已建立，open已经调用了

2：请求已接收，也就是接收到头信息了

3：请求处理中，也就是接收到响应主体了

4：请求已经完成，且响应已就绪，也就是响应完成了
　　　
```js
　var request = new XMLHttpRequest()

　　　 request.open("GET","get.php")

　　　 request.send()

　　　 request.onreadystatechange = function(){

　　　　　if (request.readyState===4&&request.status===200){   //响应完成且请求成功

　　　　　　//这里做些事情   比如在页面进行呈现
          alert(request.responseText)

　　　　　　}

　　　 }

      request.send(null)
```

## 跨域

- 浏览器有同源策略，不允许ajax访问其他域接口

- 跨域条件：协议、域名、端口，有一个不同就算跨域

**可以跨域的三个标签**

- \<img src=xxx\>  可以用于打点统计，统计网站可能是其他域

- \<link href=xxx\> 可以使用CDN，CDN的也是其他域

- \<script src=xxx\> 可以使用CDN，可以用于JSONP

**跨域注意事项**

- 所有跨域请求都必须经过信息提供方允许

- 如果未经允许即可获取，那就是浏览器的漏洞

**JSONP**

```js
window.callback = function (data) {
  // 跨域得到的信息
  console.log(data)
}
<script scr="http://xxx.xxx.com/api/getJsonp"> // 这个接口返回 callback({name:'evan',age:26})
```

## 存储

**cookie和storage的区别**

cookie:

- 本身用于客户端和服务端通信

- 但是它有本地存储的功能，于是就被“借用”

- 存储量太小，只有4KB

- 所有的http请求都带着，影响资源获取效率

locationStorage和sessionStorage:

- API简单

- HTML5专门为存储而设计，最大容量5M

- sessionStorage每次浏览器关闭会清空

- **在iOS Safari隐藏模式下，localStorage.getItem会报错，建议统一使用try-catch封装**
