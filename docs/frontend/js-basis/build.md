
# vue脚手架多渠道

1. 安装`cross-env`

```sh
npm i cross-env -D
```

2. 添加`qa`环境打包命令

```json
"scripts": {
  "qa": "cross-env NODE_ENV=qa node build/build.js"
}
```

3. 添加`qa.env.js`文件，注意` NODE_ENV: '"qa"',`

4. 修改`webpack.prod.conf.js`

```js

const env = process.env.NODE_ENV === 'qa'
  ? require('../config/qa.env')
  : require('../config/prod.env')

new webpack.DefinePlugin({
  'process.env': env // 这个主要是注入process.env到前端代码中
}),
```

5. 删除`build.js`中的`process.env.NODE_ENV = 'production'`

6. 前端代码中使用`Config`配置

```js

'use strict'

import Dev from '@/../config/dev.env'
import Prod from '@/../config/prod.env'
import Qa from '@/../config/qa.env'

console.log(`process.env.NODE_ENV:${process.env.NODE_ENV}`)

let Config
if (process.env.NODE_ENV === 'production') {
  Config = Prod
} else if (process.env.NODE_ENV === 'qa') {
  Config = Qa
} else if (process.env.NODE_ENV === 'development') {
  Config = Dev
}

export default(Config)

```

<RightMenu />