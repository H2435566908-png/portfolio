#!/usr/bin/env python3
"""
简单的Python HTTP隧道
使用Python的socket和select模块创建隧道
"""
import socket
import select
import threading
import time

LOCAL_PORT = 8080
REMOTE_HOST = '0.0.0.0'
REMOTE_PORT = 8080

def tunnel_connection(client_socket, client_address):
    """处理单个连接"""
    try:
        # 连接到本地服务器
        local_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        local_socket.connect(('127.0.0.1', LOCAL_PORT))

        # 设置非阻塞
        client_socket.setblocking(0)
        local_socket.setblocking(0)

        while True:
            readable, _, _ = select.select([client_socket, local_socket], [], [], 1.0)

            if client_socket in readable:
                data = client_socket.recv(4096)
                if not data:
                    break
                local_socket.sendall(data)

            if local_socket in readable:
                data = local_socket.recv(4096)
                if not data:
                    break
                client_socket.sendall(data)

    except Exception as e:
        print(f"连接错误: {e}")
    finally:
        client_socket.close()
        local_socket.close()

def start_server():
    """启动隧道服务器"""
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

    try:
        server.bind((REMOTE_HOST, REMOTE_PORT))
        server.listen(5)
        print(f"隧道服务器启动在 {REMOTE_HOST}:{REMOTE_PORT}")
        print(f"转发到本地端口 {LOCAL_PORT}")
        print("其他人可以通过以下地址访问:")
        print(f"  http://你的IP地址:{REMOTE_PORT}")

        while True:
            client_socket, client_address = server.accept()
            print(f"新连接: {client_address}")
            thread = threading.Thread(target=tunnel_connection, args=(client_socket, client_address))
            thread.daemon = True
            thread.start()

    except Exception as e:
        print(f"服务器错误: {e}")
    finally:
        server.close()

if __name__ == "__main__":
    start_server()
