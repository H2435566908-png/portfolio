#!/bin/bash

# 部署脚本 - 提交并推送更改到 GitHub Pages

echo "========================================"
echo "开始部署到 GitHub Pages"
echo "========================================"
echo ""

# 添加所有更改
echo "1. 添加更改到暂存区..."
git add .

# 检查是否有更改需要提交
if git diff --cached --quiet; then
    echo "没有发现更改，无需部署"
    exit 0
fi

# 提交更改
echo "2. 提交更改..."
git commit -m "更新网站内容"

# 推送到 GitHub
echo "3. 推送到 GitHub..."
git push origin main

echo ""
echo "========================================"
echo "部署完成！"
echo "========================================"
echo ""
echo "网站将在几分钟后更新："
echo "https://H2435566908-png.github.io/portfolio/"
echo ""
echo "查看部署状态："
echo "  gh repo view --web"
