#!/bin/bash
# $1 为commit ID
git checkout --orphan temp $1
git commit -m "Truncated history"
git rebase --onto temp $1 master
git branch -D temp
git push -f origin master   #更新服务器端数据