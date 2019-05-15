# git-flow

在团队开发中使用版本控制系统时，商定一个统一的工作流程是至关重要的。

## 分支保护

将 `master` 和 `develop` 分支列为保护分支。保护分支意味着任何人不得直接提交代码到该分支，只能通过 `Pull Request` 合并分支。

## 具体步骤

这里以开发一个新的功能验证码（security code）为例：

1. 从 `develop` 切出 `feature` 分支

```sh
git checkout -b security-code
```

在 `security-code` 分支编写功能代码，提交commit，如果想要 push 到远端

```sh
git push origin security-code:feature/security-code
```

假设 `security-code` 已经开发完毕，并且有10条commit记录，此时提交 `PR` 到 `develop` 分支。 `PR` 要别的团队成员处理，先进行代码 `review`，然后合并。合并有三种方式

<img src='../img/PR.png'>

第一种直接将 `security-code` 分支的 commit 合并到 `develop`

第二种将 `security-code` 分支的这10条 commit 合并成一条后，再合入 `develop`（建议使用）

第三种与第二种功能一样，区别是 rebase 变基，squash 只合并 commit

合并分支后即可将功能分支删除

```sh
git branch -D security-code
```

2. 如果在开发 `security-code` 时，有小伙伴将新功能合入了 `develop` 而 security-code 又依赖新功能怎么办

```sh
git pull origin develop
```

3. 输入命令 `git branch -a` 能查看本地与远程所有分支，如果时间久了，发现有些远端分支已经删掉了，但是本地库中还有这些相比较远程库中已经不存在的分支，那么采用

```sh
git remote prune origin
```
