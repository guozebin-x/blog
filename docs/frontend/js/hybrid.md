# hybrid

## hybrid是什么，为何用hybrid？

· 客户端和前端混合开发

· 存在的核心意义在于快读迭代，无需审核

· webview和file协议

- **hybrid 文字解释**

  · hybrid即“混合”，即前端和客户端的混合开发

  · 需前端开发人员和客户端开发人员配合开发

  · 某些环节也可能涉及到server端

- **存在价值，为何用 hybrid**
  
  · 可以快读迭代更新【关键】（无需app审核，前端代码没有原生那么高的权限）

  · 体验流畅（和NA的体验基本类似）

  · 减少开发和沟通成本，双端公用一套代码

- **webview**

  · 是app中的一个组件（app可以有webview，也可以没有）

  · 用户记载H5页面，即一个小型的浏览器内核

- **file://协议**

  · file协议：本地文件，快

  · https协议：网络加载，慢

- **具体实现**

  使用场景：

    · 使用NA：体验要求极致，变化不频繁（如头条首页）

    · 使用hybrid：体验要求高，变化频繁（如头条新闻详情页）

    · 使用H5：体验无要求，不常用（如举报、反馈等页面）

    1. 前端做好静态页面，将文件交给客户端

    2. 客户端拿到前端静态页面，以文件形式存储在app中

    3. 客户端在一个webview中

    4. 使用file协议加载静态页面


## hybrid更新和上线的流程？

- **hybrid更新上线流程**

  · 分版本，有版本号，如2018092110

  · 将静态文件压缩成zip包，上传到服务端

  · 客户端每次启动，都去服务端检查版本号

  · 如果服务端版本号大于客户端版本号，就去下载最新的zip包

  · 下载完解压，覆盖现有文件

## hybrid和H5的区别？

- 优点：体验好，可快速迭代

- 缺点：开发成本高，运维成本高

- 适用场景：hybrid适合产品型，H5适合运营型(单次活动)

## 前端JS 和客户端如何通讯

<RightMenu />