# vue中jsonp

> 推荐想学Vue的同学看下黄轶老师的[音乐App课程][1]

 ## **jsonp为什么能跨域？**

1、 jsonp发送的并不是ajax请求；

2、 利用动态创建一个script标签，因为script标签是没有同源策略限制的，是可以跨域的；

3、 把这个script标签的src指向我们请求的服务端地址，这个地址会携带一个参数：callback ,一个回调函数，服务端会把数据通过这个回调函数返回给客户端，但是客户端没有这个函数怎么接收呢？所以在发送请求之前，要在全局（window）注册这样一个方法，利用这个方法，来获得数据。

## **案例**

1、 安装jsonp；
       
```
npm install jsonp
```

2、 封装jsonp；

```js
import originJSONP from 'jsonp'

/**
 * 封装jsonp
 * @param {*} url 原始的jsonp第一个参数是url，第二个参数是option，这里为了比较好写参数做了下封装
 * @param {obj} data 参数
 * @param {*} option jsonp的option
 */
export default function jsonp(url, data, option) {
  // 如果url没有？就加一个？拼接
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    // 原始jsonp的三个参数，url、option、回调函数
    originJSONP(url, option, (err, data) => {
      // 类似node的设计，如果err是null，表示成功，data是后端返回的数据
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

```

3、 封装API

```js
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  // 这里返回一个promise对象
  return jsonp(url, data, options)
}

```
 
4、调用API

```js
  created () {
    this._getRecommed()
  },
  methods: {
      /**
       * @augments
       * 获取qq音乐数据
       */
    _getRecommed() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.banners = res.data.slider
        }
      })
    },
}
```


  [1]: https://coding.imooc.com/class/107.html