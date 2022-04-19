# GIT常用命令

### git branch 相关

* git branch    查看所有本地分支
* git branch <new_branch_name>    新建本地分支
* git branch -a   查看所有分支
* git branch -d <branch_name>   删除分支
* git branch -D <branch_name>   强制删除分支
* git branch -vv  产看本地分支关联情况
* git branch -m <old_branch_name> <new_branch_name>   修改本地分支名（当前分支不在修改分支上）
* git branch -m <new_branch_name>   修改本地分支名（当前分支在修改分支上）
* git branch --unset-upstream   接触与远程分支的关联
* git branch --set-upstream-to=<origin/master>    本地分支与远程分支关联

### git checkout 相关

* git checkout <branch_name>  切换分支
* git checkout -b <branch_name>   创建并切换分支
* git checkout -b <branch_name> <origin/master>   从origin/master创建分支并切换分支

### git push 相关

* git push    推上远程仓库
* git push origin --delete <branch_name>    删除远程分支
* git push origin :<branch_name>    删除远程分支
* git push origin <branch_name>:<branch_name> 本地分支推上远程

### Fork + Pull Request 流程

> situation: 当我们需要为开源仓库 A 贡献代码

1. 从 A 仓库 fork代码到自己仓库，这个时候在自己得仓库中会有一个与 A 同名的项目，后面我们用 AF指代此仓库。
2. `git clone` AF仓的代码到本地。
3. 通过 `git remote -v`, 我们发现本地的仓库的远程 remote 地址是 AF 的地址，这个时候我们需要为本地 AF 添加 A 的远程地址，这样可以与 A 仓代码保持同步。
4. 通过 `git remote add upstream <https://github.com/xxx/A.git>` 为本地 AF 添加新的 remote 地址。
5. 此时我们通过 `git remote -v`，可以发现，此时 AF 的 remote 多了一个 `upstream` ,地址为 A 仓库的远程地址。
6. 此时我们可以通过 `git fetch upstream master` 获取 A 仓库 `master` 分支的最新代码，然后通过 `git rebase upstream/master` 合并到本地 AF 的 `master` 分支，再通过 `git push` 推上我们的远程 AF 仓库。
7. 当我们提交了一笔 `commit` 到我们的远程 AF 仓时，可以在远程 AF 仓创建 `pr`,请求合入 A 仓库中，当 A 仓库审核通过，批准合入后，我们就完成了一笔 `pr`。

### Cherry-pick 流程

> 参考外链：[阮一峰 cherry-pick 教程](http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

`Cherry-pick` 的流程在阮一峰老师的 《cherry-pick 教程》 中写的很详细，参考上述文档就完事了。