# 小知识点

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