# git

## 基础命令

**平时工作：**

```
拉取项目：git pull

暂存本地：git add .

查看暂存：git status

提交本地仓库：git commit -m '本次提交注释'

提交远程仓库：git push [origin master] // []可以省略
```

**偶尔使用：**

```shell

本地项目和远端GitHub连接：git remote add origin https://github.com/vanoneang/vue-music.git

更改本地仓库的远程连接：git remote set-url origin https://github.com/vanoneang/vue-music.git

查看本地仓库的远程连接：git remote -v

查看用户名：git config user.name

查看邮箱：git config user.email

强行覆盖之前版本：git push -u origin master -f 

查看所有分支：git branch -a

查看本地分支：git branch

切换远程分支并创建到本地：git checkout -b devel origin/devel

本地创建分支，并推送到远端：
git checkout -B devel
git push origin devel:devel

删除本地分支(先切换到master分支)：git branch -D devel

删除远端分支: git push origin --delete devel

切换本地分支：git checkout master


merge分支:

1. 首先确保开发分支commit、push处理完毕
2. 切换到master，执行git pull，确保是最新代码
3. 切换到开发分支,为了保险起见，你可以在merge前先建一个备份分支
4. 执行git rebase master，如果有冲突，解决掉
4. 申请merge request，等待管理员同意
```

## Git Flow

**GitFlow定义了一个围绕项目发布的严格的分支模型**

<img :src="$withBase('/assets/gitflow.png')" >

- master 主分支

- hotfix bug紧急修复分支 hotfix/

- release 发布分支，给qa测试使用 release/

- develop **开发分支（我们主要用这个）**

- feature 功能分支，开发新功能，可以同时有好几个不同的feature分支，完成以后合并到开发分支 feature/

1. 当项目开发完毕，把当前开发分支合并到发布分支，如果bug紧急需要修复，打一个hotfix分支，确认没问题了，合并到发布分支，打一个tag，这时候把最新的发布分支合并主分支和开发分支，然后删除发布分支；

2. 当项目正常运行状态，突然发现bug，这时候从主分支，打一个hotfix分支，修复完成之后合并回主分支，并且打一个新的tag，同时，把最新的代码合并到开发分支，相当于同时维护master分支和develop分支；

3. master分支和develop分支是长期存在的，其他分支完成使命后要删除。

4. hotfix/release/feature这三个分支的名字，作为一个文件夹类似的东西，比如hotfix/login

5. 新功能分支不能与master分支有交互