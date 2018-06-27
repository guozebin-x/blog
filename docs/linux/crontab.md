# crontab

## 安装

```
yum install -y cronie crontabs
```

## 检查crond服务是否安装及启动

```
yum list cronie && systemctl status crond
```

## 检查crontab工具是否安装、在哪儿、有什么任务

```
yum list crontabs && which crontab && crontab -l
```

## crontab架构

```
* * * * * my Command  // 分时日月周

* * * * * echo -e "this is a test output" > /home/wwwroot/default/test.out

```

## 添加crontab任务

```
crontab -e
```

具体是编辑的那个文件呢？

如果是root用户，那么就是`/var/spool/cron/root`

## crontab配置文件

```
vim /etc/crontab
```

## crontab日志

```
tail -n 5 /var/log/cron // 查看最近五次日志
```

## 清理系统日志

在`/var/log`路径

查看当前目录文件大小`du -sh *`

```
* * 1 * * cat /dev/null > /var/log/messages
```


