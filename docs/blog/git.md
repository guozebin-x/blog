# 开源项目Lin CMS的开发流程

## 前言

[林间有风](https://github.com/TaleLin)团队目前共有两个项目组，一个是微信小程序原生组件库 Lin UI，一个是前后端分离的web端内容管理系统 Lin CMS。笔者属于 Lin CMS 前端小组，也就是 lin-cms-vue 项目。从 `2019年1月17日` 提交第一个 commit 至今差不多已经半年时间，在磕磕绊绊中也有了些许成长。

本文主要介绍 lin-cms-vue 的开发流程，一个好的统一的开发流程，在团队合作中是至关重要的，能够极大的提升工作效率。在介绍开发流程之前，我们先来了解一下GitFlow工作流。

## GitFlow工作流

**GitFlow定义了一个围绕项目发布的严格的分支模型**

<img :src="$withBase('/assets/gitflow.png')" >

| 分支        | 说明           |
| ---------- | ---------|
| master     | 主分支(保护分支)      |
| develop    | 开发分支(保护分支)      |
| hotfix/    | bug紧急修复分支     |
| feature/   | 功能分支，开发新功能，完成以后合并到开发分支 |


### 分支保护

我们将 `master` 和 `develop` 分支列为保护分支。保护分支意味着任何人不得直接提交代码到该分支，只能通过 `Pull Request` 合并分支。另外需要说明的是，我们并没有完全按照 GitFlow 工作流来进行开发，根据项目及成员的具体情况可以进行适当的调整。下面我们以一个新功能的开发为例，介绍下相关开发流程。


## 开发流程

这里以开发一个新的功能验证码（security code）为例：

从当前最新的开分分支 `develop` 切出一个 `feature` 功能分支，执行下面命令，注意这是在本地仓库的新分支：

```sh
git checkout -b security-code
```

在 `security-code` 分支编写功能代码，提交commit，到此时我们均是在本地仓库操作，如果想要将本地的 security-code 分支 push 到远端，执行下面命令，其中 feature/ 代表这是一个功能分支：

```sh
git push origin security-code:feature/security-code

 * [new branch]      security-code -> feature/security-code
```

在远端创建了 feature/security-code 分支后，security-code 的功能还没有开放完毕，继续开发并提交 commit，这时将近期 commit 提交至远端 push，执行以下命令：

```sh
git push origin HEAD:feature/security-code
```

如果在开发 `security-code` 时，有小伙伴将新功能合入了 `develop` 而 security-code 又依赖新功能怎么办？那就把远端已经合并过最新的开发分支 develop 拉下来：

```sh
git pull origin develop
```

假设 `security-code` 已经开发完毕，并且有10条commit记录，我们要将功能分支的代码合并到开发分支：提交 `PR` 到 `develop` 分支。 不管是团队成员还是外部贡献者的 pull request 都需要经过代码 `review` 才能合并进开发分支。代码合并有三种方式：

<img src='../img/PR.png'>

第一种直接将 `security-code` 分支的 commit 合并到 `develop`

第二种将 `security-code` 分支的这10条 commit 合并成一条后，再合入 `develop`（建议使用）

第三种与第二种功能一样，区别是 rebase 变基，squash 只合并 commit

合并分支后即可将功能分支删除，删除分支分为删除本地分支和远端分支，远端分支的删除直接在 GitHub 页面操作即可，下面的命令来删除本地分支：

```sh
git branch -D security-code
```

这样经过长时间的分支增删后，我们会发现有些远端的分支分明已经删掉了，但是在本地分支通过 `git branch -a` 还是能够看到那些已经被删除掉的分支，这时候我们可以用下面的命令进行清理：

```sh
git remote prune origin

➜  lin-cms-vue git:(exception) git remote prune origin
修剪 origin
URL：https://github.com/TaleLin/lin-cms-vue.git
 * [已删除] origin/components/select
 * [已删除] origin/feature/404
 * [已删除] origin/feature/enter-animation
 * [已删除] origin/feature/layout
 * [已删除] origin/feature/ui-color
 * [已删除] origin/feature/ui-op
 * [已删除] origin/publish/beta2
```

## 版本发布

经过一段时间的开发，我们完成了一个阶段的开发任务。这时候我们要进行功能测试，将当前开发分支的代码部署到测试环境，团队成员共同完成测试。如果发现bug及时进行修复，如无异常，则发布新版本：

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

2. 然后，将开源项目新版本 merge 到本地项目，这里的 --allow-unrelated-histories 是允许 merge 不相关的仓库

```sh
git merge lin-cms-vue/master --allow-unrelated-histories
```

::: warning
这种方法其实是比较危险的，要求你能够完全把握住冲突的部分那些是需要的，那些不需要的。如果在merge后，发现项目**改崩掉了**，这时候记得**不要提交commit**，执行下面的命令，将**本次修改全部撤回**。

```sh
git checkout .
```
:::

 <RightMenu />