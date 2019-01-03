# H5页面终端适配

1、15年，Amfe阿里无线前端团队在双十一之后，发布了[使用Flexible实现手淘H5页面的终端适配
](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)一文，也就是`flexible方案`来解决H5页面多终端适配问题；

flexible的实质就是通过JS来动态改写`meta`标签，从而实现兼容性。

- 根据dpr的值来修改viewport实现1px的线

- 根据dpr的值来修改html的font-size，从而使用rem实现等比缩放

- 使用Hack手段用rem模拟vw特性

2、17年8月，再次发文[再聊移动端页面的适配](https://www.w3cplus.com/css/vw-for-layout.html),告诉大家Flexible已经完成了他自身的历史使命，我们可以放下Flexible，拥抱新的变化。

随着众多浏览器对`vw`的支持，直接将`vw`单位应用到适配布局中。

- vw：是Viewport's width的简写,1vw等于window.innerWidth的1%

- vh：和vw类似，是Viewport's height的简写，1vh等于window.innerHeihgt的1%

Flexible的设计原理来源于Viewport单位的思路。通过JS来判断，动态修改meta的值。而vw是浏览器客户端原生支持的特性，不需要依赖JS来做任何的判断和计算。这是两者最大的差异。

3、18年1月，发布[如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html),使用`vue-cli`来构建项目，通过安装PostCss插件，让编写的`px`直接转换为`vw`。

<RightMenu />