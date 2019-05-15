# 开源项目Lin CMS的工作流程

在团队开发中使用版本控制系统时，商定一个统一的工作流程是至关重要的。本文将结合 GitFlow 介绍 Lin CMS的工作流程。

## Git Flow工作流

**GitFlow定义了一个围绕项目发布的严格的分支模型**

<img :src="$withBase('/assets/gitflow.png')" >

| 分支        | 说明           |
| ---------- | ---------|
| master     | 主分支(保护分支)      |
| develop    | 开发分支(保护分支)      |
| hotfix/    | bug紧急修复分支     |
| feature/   | 功能分支，开发新功能，完成以后合并到开发分支 |


### 分支保护

我们将 `master` 和 `develop` 分支列为保护分支。保护分支意味着任何人不得直接提交代码到该分支，只能通过 `Pull Request` 合并分支。


## 开发新功能

这里以开发一个新的功能验证码（security code）为例：

从 `develop` 切出 `feature` 分支

```sh
git checkout -b security-code
```

在 `security-code` 分支编写功能代码，提交commit，如果想要 push 到远端

```sh
git push origin security-code:feature/security-code
```

假设 `security-code` 已经开发完毕，并且有10条commit记录，此时提交 `PR` 到 `develop` 分支。 `PR` 要其他团队成员处理，先进行代码 `review`，然后合并。合并有三种方式：

<img src='../img/PR.png'>

第一种直接将 `security-code` 分支的 commit 合并到 `develop`

第二种将 `security-code` 分支的这10条 commit 合并成一条后，再合入 `develop`（建议使用）

第三种与第二种功能一样，区别是 rebase 变基，squash 只合并 commit

合并分支后即可将功能分支删除

```sh
git branch -D security-code
```

如果在开发 `security-code` 时，有小伙伴将新功能合入了 `develop` 而 security-code 又依赖新功能怎么办？

```sh
git pull origin develop
```

::: tip
输入命令 `git branch -a` 能查看本地与远程所有分支，如果时间久了，发现有些远端分支已经删掉了，但是本地库中还有这些相比较远程库中已经不存在的分支，那么采用

```sh
git remote prune origin
```
:::

## 版本发布

首先，经过一段时间的开发，我们完成了一个阶段的开发任务。这时候我们要进行功能测试，将当前开发分支的代码部署到测试环境，团队成员共同完成测试。如果发现bug及时进行修复，如无异常，则发布新版本：

1. 从 develop 提交 PR 到 master 主分支，打tag
2. 添加该版本相关文档介绍
3. 编写版本日志

## 更新GitHub新版本到自己的项目

Lin CMS有一个[线上演示项目](http://face.cms.7yue.pro)，在开源项目新版本发布后，跟大家一样，我要转换角色以开源项目使用者的身份进行线上项目升级。但是，作为工程类的开源项目，不能像一些只引用核心库的开源项目那样，直接更新版本就行，我们的项目本身已经有写的有业务了，这时候要怎么办呢？其实没有太好的办法，这里我提供一种方法：

1. 首先，添加开源项目的远程链接

```sh
git remote add lin-cms-vue https://github.com/TaleLin/lin-cms-vue.git
```

添加后可以通过下面的命令查看下本地项目的远程链接列表

```sh
git remote -v

# ➜  lin-cms-demo git:(master) git remote -v
# lin-cms-vue	https://github.com/TaleLin/lin-cms-vue.git (fetch)
# lin-cms-vue	https://github.com/TaleLin/lin-cms-vue.git (push)
# origin	https://git.coding.net/indexer/lin-cms-demo.git (fetch)
# origin	https://git.coding.net/indexer/lin-cms-demo.git (push)
```

2. 然后，将开源项目新版本 merge 到本地项目

```sh
git merge lin-cms-vue/master --allow-unrelated-histories
```

::: warning
这种方法其实是比较危险的，要求你能够完全把握住冲突的部分那些需要，那些不需要。如果在merge后，发现项目改崩掉了，这时候记得**不要提交commit**，执行下面的命令，将**本次修改全部撤回**。

```sh
git checkout .
```
:::

 <RightMenu />