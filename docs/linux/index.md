# 常用指令（Mac）

## hosts位置

```
vi /etc/hosts
```
## 进程

**查看进程**

```
ps aux | grep mysqld
```

**查看指定端口号进程**

```
sudo lsof -i:80
```

**结束进程**

```
kill pid

kill -9 pid // 强制结束
```

## 环境变量

**查看PATH**

```
echo $PATH
```

**添加PATH**

```
1. vi ~/.bash_profile

2. export PATH="/opt/local/lib/mariadb-10.1/bin:$PATH"
```

**立即执行**

```
source ~/.bash_profile
```

## 指定目录下查找

```
find /opt -name "*.so" | grep php

where php
```


## 进入超管模式

```
sudo su
```

## MacPorts

**查看版本**

```
port -v
```

**查找(按空格翻页)**

```
sudo port search php71 | more
```

**查看具体的软件包的内容和说明**
```
port info mariadb
```
**安装与卸载软件**

```
sudo port install software-name

sudo port uninstall sofrware-name
```

**下载的软件安装包位置**

```
cd /opt/local/var/macports/distfiles
```

**软件安装位置**

```
cd /opt/local/etc
```

**服务管理**

```
sudo prot load mariadb-10.1-server
sudo port reload mariadb-10.1-server
sudo port unload mariadb-10.1-server
```

**log位置**

```
/opt/local/var/log
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

## Apache

**配置文件位置**

```
vi /etc/apache2/httpd.conf
```


**启动**

```
sudo apachectl restart
sudo apachectl start
sudo apachectl -k stop
```

**关闭Apache及开机启动**
```
sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist
```

## nginx

查看是否配置正常

```
nginx -t
```

## php

配置环境变量

```
vi /opt/local/etc/php71/php-fpm.d/www.conf

找到 env 配置
```

查看已安装扩展

```
php -m
```