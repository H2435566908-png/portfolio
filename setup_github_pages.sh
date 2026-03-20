#!/bin/bash

# GitHub Pages 配置脚本
# 请先在 https://github.com/new 创建仓库，名称设为 portfolio

# 替换下面的用户名为你的GitHub用户名
USERNAME="实际用户名"

# 设置远程仓库
git remote set-url origin https://github.com/${USERNAME}/portfolio.git

# 推送代码
git push -u origin main

echo ""
echo "========================================"
echo "代码推送完成！"
echo "========================================"
echo ""
echo "下一步：启用GitHub Pages"
echo "1. 访问 https://github.com/${USERNAME}/portfolio"
echo "2. 点击 'Settings' → 'Pages'"
echo "3. 在 'Source' 下拉菜单选择 'main' 分支"
echo "4. 点击 'Save'"
echo ""
echo "你的网站将在几分钟后可用："
echo "https://${USERNAME}.github.io/portfolio/"
echo ""
echo "注意：如果仓库名是 portfolio，URL就是上面的地址"
echo "如果仓库名不同，请相应修改URL"
