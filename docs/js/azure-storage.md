# Azure Storage

## 什么是Azure Storage 

   Azure Storage 是微软 Azure 云提供的云端存储解决方案，当前支持的存储类型有 Blob、Queue、File 和 Table。

就是把文件放在云上，给它一个 URL，通过这个 URL 来访问文件。

![图片描述][1]

## 可视化工具

[下载地址][2]

## Blob操作

一个 Blob 就代表一个文件。

我所需要的图片存储，用的是Block blobs，主要用来存储静态的文件，比如图片、电影和文档。

## GitHub

[Node.js地址][3]

## 注意

一、文档中没写第三个参数，这个地方耽误了不少时间；

```js
var blobService = azure.createBlobService(accountName, accountKey, host);
```

二、README中的API是给node命令行用的，如果上传接口要用浏览器执行，不能直接

```js
var azure = require('azure-storage');
```

需要引入浏览器专用的sdk，步骤：

1.在node_modules/azure-storage下，

```
 npm install
```

2.然后编译export文件

```
npm run genjs 1
```
在文件中引入：

```js
import AzureStorage from 'azure-storage/browser/azure-storage.blob.export'
```

```js
var blobService = AzureStorage.createBlobService(accountName, accountKey, host)
```

这种形式会讲accountKey直接暴露在js中，为了安全可以在服务端先生成一个sasToken

```js
      var startDate = new Date()
      var expiryDate = new Date(startDate)
      expiryDate.setMinutes(startDate.getMinutes() + 100)
      startDate.setMinutes(startDate.getMinutes() - 100)

      var sharedAccessPolicy = {
        AccessPolicy: {
          Permissions: azure.BlobUtilities.SharedAccessPermissions.READ,
          Start: startDate,
          Expiry: expiryDate
        }
      }

      var token = blobService.generateSharedAccessSignature('qrcode', file.name, sharedAccessPolicy)
      console.log(token)
      var sasUrl = blobService.getUrl('qrcode', file.name, token)
      console.log(sasUrl)
```

如果是采用sas来创建blobService实例，需要用下面这个API

```js
      var sasKey = 'sasToken'
      var blobUri = 'host地址'
      var blobService = AzureStorage.createBlobServiceWithSas(blobUri, sasKey).withFilter(new AzureStorage.ExponentialRetryPolicyFilter())

```

然后，下面就可以调用上传文件接口了

```js
var 文件 = document.getElementById('files').files

blobService.createBlockBlobFromBrowserFile('你的container', '你的blob名称', 文件, option对象, function (error, result, response) {
        console.log(222)
        if (error) {
        // Upload blob failed
          console.log(error)
        } else {
        // Upload successfully
          console.log(result)
        }
      })
```

## 需求：用浏览器来上传二进制文件到Azure Blob

JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

上传文件到Azure Blob有四个API：

```js
createBlockBlobFromBrowserFile(container, blob, browserFile [, options], callback)

createBlockBlobFromLocalFile(container, blob, localFileName [, options], callback)

createBlockBlobFromStream(container, blob, (Stream), streamLength [, options], callback)

createBlockBlobFromText(container, blob, text [, options], callback)
```

从本地文件上传，需要用到node的ps文件操作，用file控件只能上传input-file，而我需要把拿到的base64文件转成二进制流才行

## 解决方案：Buffer

在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

[npm也提供了一个Buffer][4]，和node API基本一致

```
npm install buffer
```
在vue组件中引入

```js
var Buffer = require('buffer/').Buffer
```

最终：

```js
  uploadAzure () {
      // const self = this
      let resu = new Promise(async (resolve, reject) => {
        /* eslint-disable no-undef */
        let rawdata = Session.get('img_base64')
        let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
        let type = matches[1]
        let buffer = new Buffer(matches[2], 'base64')
        let blobUri = Config.azure.host

        let imageid = Util.uuid() + '.jpg'

        try {
          let res = await Api.get(Session.get('SID'), 'azure/storagesas', {imageid: imageid})
          if (res.code === 0) {
            let sasKey = res.data.token
            console.log(sasKey)
            let blobService = AzureStorage.Blob.createBlobServiceWithSas(blobUri, sasKey).withFilter(new AzureStorage.Blob.ExponentialRetryPolicyFilter())
            blobService.createBlockBlobFromText(Config.azure.container, imageid, buffer, {contentType: type}, function (error, result, response) {
              if (!error) {
                resolve(result)
              }
            })
          }
        } catch (e) {
          console.log(e)
        }
      })

      resu.then((res) => {
        console.log(res.name)
        Session.set('imageid', res.name)
      })
    },
```
![图片描述][5]




  [1]: //img.mukewang.com/5ac475190001201303760199.png
  [2]: https://azure.microsoft.com/en-us/features/storage-explorer/
  [3]: https://github.com/Azure/azure-storage-node
  [4]: https://www.npmjs.com/package/buffer
  [5]: //img.mukewang.com/5acad59f0001f3ed10380115.png