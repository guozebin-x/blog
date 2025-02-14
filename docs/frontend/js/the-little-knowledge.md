# 日常小知识点

## &和&&、|和||的区别

**&和&&的区别：**

单&时，左边无论真假，右边都进行运算；

双&时，如果左边为真，右边参与运算，如果左边为假，那么右边不参与运算。

**“|”和“||”的区别:**

单或时，左边无论真假，右边都进行运算；

双或时，左边为真，右边不参与运算。

## console.time 和 console.timeEnd 

```js
// 启动计时器(name=testForEach)
console.time('testForEach');

// (... 执行某些测试,如 forEach 循环之类)

// 结束计时器,获取运行时间
console.timeEnd('testForEach');

// testForEach: 13636.634ms (直接显示在控制台,运行时间)
```

## 本地启服务

```
sudo npm i http-server -g // 全局安装
```

在`/usr/loacl/bin`下，有了http-server命令，软连接hs

```
hs -p 8881 // 自定义端口
```

可以启动一个本地服务，只能放html静态文件

## pre-commit

**代码质量**

1. 实现方式一

```
npm install --save-dev pre-commit
```

在package.json中添加：

```json
{
  "name": "437464d0899504fb6b7b",
  "version": "0.0.0",
  "description": "ERROR: No README.md file found!",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: I SHOULD FAIL LOLOLOLOLOL \" && exit 1",
    "foo": "echo \"fooo\" && exit 0",
    "bar": "echo \"bar\" && exit 0"
  },
  "pre-commit": [
    "foo",
    "bar",
    "test"
  ]
}
```

2. 实现方式二

```sh
npm i husky -D

"lint": "eslint  --ext .js --ext .jsx --ext .vue client/",
"precommit": "npm run lint",
```

ps: git init后实现

## 监听本地构建

**如果有项目变更，自动重启,相当于fs.watch**

```
npm i supervisor -g

supervisor app.js
```

## Promise使用

墙裂建议在所有队列最后都加上.catch(),以避免漏掉错误处理造成意想不到的问题

```js
doSomething()
  .doAnotherThing()
  .doMoreThing()
  .catch( err => {
    console.log(err)
  })
```

## 公网ip

1. PING出来的是入口IP，有可能是cdn的

2. ssh登录的可能是vpn的内容ip

3. 真正的出口ip：执行

```
curl ip.cn
```

## PHP,curl,post请求传参

就算没有参数，CURLOPT_POSTFIELDS也要随便写点什么，否则报错400

## Webpack Bundle Analyzer


```sh
npm run build --report # vue-cli
```

## npm发布

```sh
npm login

npm publish
```

<RightMenu />