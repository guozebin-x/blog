# OAuth（开放式授权）

## OAuth协议

- OAuth is short for Open Authorization

- OAuth协议，比如QQ第三方登录，弹出的授权登录框，是QQ旗下，所以第三方是不知道用户的账号密码，授权成功后，可以获得用户部分QQ信息  

<img :src="$withBase('/assets/oauth.png')" >

## 版本迭代

- OAuth1.0 发布于2007年末（有bug）

- OAuth2.0 发布于2010年初

## 应用场景

- 用户授权第三方使用大厂账号的信息

- 获取授权后，在符合规则的情况下，可以访问各种api，比如一键分享到大厂平台，通过`access_token`来调用api

- 大厂各自app之间用户资源共享，一个账户走一个平台

## 实现过程

1. 请求OAuth登录页

第三方请求大厂页面登录时，带有`特定参数的URL`，前端get请求

<img :src="$withBase('/assets/oauth-url.png')" >

2. 用户使用账号密码授权（或者微信扫码）

<img :src="$withBase('/assets/oauth-code.png')" >

3. 返回登录结果

后端请求，带有特定参数的URL，通过code获取access_token，同时拿到用户信息

<img :src="$withBase('/assets/oauth-access.png')" >

<RightMenu />