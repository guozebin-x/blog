# 常用指令（Mac）

## PATH

### 查看PATH

```
echo $PATH
```

### 添加PATH

```
1. vi ~/.bash_profile

2. export PATH="/opt/local/lib/mariadb-10.1/bin:$PATH"
```

### 立即执行

```
source ~/.bash_profile
```

## 查找

```
find /opt -name "*.so" | grep php
```

## 进入超管模式

```
sudo su
```

## port

### 服务管理

```
sudo prot load mariadb-10.1-server
sudo port reload mariadb-10.1-server
sudo port unload mariadb-10.1-server
```

### 查找(按空格翻页)

```
sudo port search php71 | more
```

## npm全局安装包路径

```
/usr/local/lib/node_modules
```

## 全局命令

```
/usr/local/bin 用户放置自己的可执行程序的地方,不会被系统升级而覆盖同名文件。

/usr/bin 下面的都是系统预装的可执行程序，会随着系统升级而改变
```