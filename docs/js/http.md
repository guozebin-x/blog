# HTTP协议原理

## OSI七层模型

<img :src="$withBase('/assets/TCPIP.png')" >

1. **物理层**

建立、维护、断开物理连接(定义物理设备如何传输数据)

2. **数据链路层**

建立逻辑连接、进行硬件地址寻址、差错校验等功能（通信的实体之间建立数据链路连接：0101之类的）

3. **网络层**

进行逻辑寻址，实现不同网络之间的路径选择（为数据在结点之间传输创建逻辑链路）

4. **传输层**

定义传输数据的协议端口号，以及流控和差错校验

协议有TCP(传输控制协议)和UDP（用户数据报协议，不可靠），数据包一旦离开网卡即进入网络传输层，向用户提供可靠的端到端（End-to-End）服务

5. **会话层**

建立、管理、终止会话。

6. **表示层**

数据的表示、安全和压缩。

7. **应用层**

网络服务与最终用户的一个接口;
为应用软件提供了很多服务；
构建于TCP协议之上；
屏蔽网络传输相关细节

协议有HTTP/FTP/SMTP/DNS/HTTPS/POP3



## HTTP发展历史

1. **HTTP/0.9**

- 只有一个命令GET

- 没有HEADER等描述数据的信息

- 服务器发送完毕，就关闭TCP连接

2. **HTTP/1.0**

- 增加了很多命令（POST/PUT等）

- 增加status code和header

- 多字符集支持、多部分发送、权限、缓存等

3. **HTTP/1.1**

- 持久连接

- pipeline在同一个连接里发送多个请求

- 增加host（同一个物理服务器可以跑多个web服务）和其他一些命令

4. **HTTP2**

- 所有数据以二进制传输（之前是字符串）

- 同一个连接里面发送多个请求不再需要按照顺序来，可以同时多个请求数据

- 头信息压缩（减少带宽使用）以及推送等提高效率的功能（服务端可以主动发起传输）

## HTTP的三次握手

首先，HTTP是不存在`连接`这么个概念的，只有`请求`和`响应`这个概念，都是数据包，那么这时候就需要一个传输的通道了，这个通道在哪里呢？就在TCP里了，创建一个`TCP connection`,我们的http请求是在这个连接的基础上发送的。

在`TCP connection`上面是可以发送多个请求的。



**URI(统一资源标识符)**

用来唯一标识互联网上的信息资源

包含URL（统一资源定位器）和URN(永久统一资源定位符：在资源被移动后还能找到)

**长链接**

Chrome的并发限制是6条，当一个页面有6个以上的请求发送时，会创建6个长链接`TCP connection`，在控制面板`network`的`Waterfall`中可以看出。

如果一个页面中有很多图片，下面的往往加载很慢，就是因为并发只有6个，后面的需要等待前面的执行完毕。同时，会复用前面的TCP连接`Connection: keep-alive`

## HTTP/1.1中的状态码

- **200** OK 正确处理

- **201** CREATED 新建或更新数据成功。

- **204** NO CONTENT 服务器接收的请求已成功处理，在返回的报文中不含主体的实体响应部分

- **301** 永久性重定向

- **302** 临时性重定向

- **400** BAD REQUEST 用户发出的请求有错误，该请求是幂等的。

- **401** Unauthorized 表示用户没有认证，无法进行当前操作。比如，登录需要账号密码，只提供账号，没有密码，返回422

- **500** INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。

- **503** 服务器正在超负载，或者正在进行停机维护

## HTTP协议常见请求/响应头

- Content-Type:请求的与实体对应的Mime信息

- Accept：指定客户端能接受的内容类型

- Origin：最初的请求来源于哪儿，主要用于POST请求

origin的提出，本身就是在HTML5中跨域操作所引入的。 
其具体流程是，当一个链接或者XMLHttpRequest去请求跨域操作，浏览器事实上的确向目标服务器发起了连接请求，并且携带这origin。 
当服务器返回时，浏览器将检查response中是否包含Access-Control-Allow-Origin字段，当缺少这个字段时，浏览器将abort，abort的意思是不显示，不产生事件，就好像没有请求过，甚至在network区域里面都看不到。 
当存在这个header时，浏览器将检查当前请求所在域是否在这个access-control-allow-origin所允许的域内，如果是，继续下去，如果不存在，abort！

- Cookie：发送给服务端的cookie的值

- Cache-Control：指定缓存响应机制（public/private/no-cache）

  private是指，只允许发送请求的域名进行缓存，其他代理的不允许

- User-Agent：用户信息

- User-Agent：用户信息

- X-Forwarded-For：请求端真实的IP

- Access-Control-Allow-Origin：允许特定的域名来访问（跨域使用）

- Last-Modified：请求资源的最后响应时间，在服务端设置后，对应的在`Request Headers`中，会携带`If-Modified-Since`头

- Etag：通过数据签名，进行是否缓存验证，在服务端设置后，对应的在`Request Headers`中，会携带`If-None-Match`头

```js
const etag = req.headers['if-none-match']

if(etag === 'etag') {
  res.writeHead(304, {
    'Cache-Control': 'max-age=2000, no-cache',
    'Last-Modified': reqTime,
    'Etag': 'etag'
  }) 
  res.end('')
} else {
  res.writeHead(200, {
    'Cache-Control': 'max-age=2000, no-cache',
    'Last-Modified': reqTime,
    'Etag': 'etag'
  })
  res.end('res ok!')
}

```

## CORS跨域请求

1. 服务端设置头信息，要注意，就算不设置，客户端的请求还是会被正常接收的，只不过浏览器会把服务端返回的数据忽略掉，并在console中报错，这是浏览器的同域限制。

```js
  res.writeHead(200, {
    'Access-Control-Allow-Origin': "http://127.0.0.1:8888"
  })
```

但是，非浏览器环境是没有同域限制的，比如通过curl来获取数据，从8888端口向8887端口获取数据

```
---> curl 127.0.0.1:8887

<--- 123
```

如果需要设置多域名,而设置只允许一个值：

浏览器对于跨域请求的`预请求`，


关于请求，[fetch](https://segmentfault.com/a/1190000011433064)可以了解一下

```js
app.all('*', function(req, res, next) {
    if( req.headers.origin == 'https://www.google.com' || req.headers.origin == 'https://www.baidu.com' ){
        res.header("Access-Control-Allow-Origin", req.headers.origin);
        res.header('Access-Control-Allow-Methods', 'POST, GET');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Max-Age', '1000') // 在这个时间段内，只需要一次预请求
    }
    next();
});
```



2. 通过`jsonp`来实现，其原理就是`script`没有同源限制


## Cookie和Session

**cookie**

- 通过Set-Cookie设置

```js
http.createServer((req, res) => {
  const html = fs.readFileSync('test.html', 'utf8')
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Set-Cookie': ['id=123; max-age=600','name=evan; HttpOnly']
  })
  res.end(html) 
}).listen(8888)
```

- 下次请求会自动带上

- 键值对，可以设置多个

**cookie的属性**

- max-age和expire设置过期时间

- Secure只在https的时候发送

- HttpOnly无法通过document.cookie访问