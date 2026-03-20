#!/usr/bin/env python3
"""
简单的HTTP隧道脚本
使用方法: python3 tunnel.py
"""
import http.server
import socketserver
import urllib.request
import json
import threading
import time

PORT = 8080
LOCAL_URL = f"http://localhost:{PORT}"

def check_server():
    """检查本地服务器是否运行"""
    try:
        urllib.request.urlopen(LOCAL_URL, timeout=5)
        return True
    except:
        return False

def create_tunnel():
    """创建localtunnel隧道"""
    import subprocess
    import sys

    # 检查localtunnel是否安装
    try:
        result = subprocess.run(['which', 'lt'], capture_output=True, text=True)
        if result.returncode != 0:
            print("安装localtunnel...")
            subprocess.run([sys.executable, '-m', 'pip', 'install', 'localtunnel'], check=True)
    except:
        print("无法安装localtunnel，请手动安装: npm install -g localtunnel")
        return

    print("启动localtunnel...")
    subprocess.run(['lt', '--port', str(PORT), '--subdomain', 'portfolio'])

if __name__ == "__main__":
    print(f"检查本地服务器: {LOCAL_URL}")
    if not check_server():
        print("错误: 本地服务器未运行，请先启动服务器")
        print("运行: python3 -m http.server 8080 --bind 0.0.0.0")
        exit(1)

    print("本地服务器运行正常")
    print("\n请选择一种方式分享网站:")
    print("1. 使用ngrok (需要注册账号)")
    print("   ~/bin/ngrok http 8080")
    print("\n2. 使用localtunnel (自动安装)")
    print("   python3 tunnel.py")
    print("\n3. 局域网访问 (同一WiFi)")
    print("   http://192.168.2.18:8080")
    print("\n4. 公网访问 (需要路由器端口转发)")
    print("   转发端口 8080 到你的电脑IP")

    # 自动启动localtunnel
    print("\n正在启动localtunnel...")
    create_tunnel()
