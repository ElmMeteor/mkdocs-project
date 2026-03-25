# 启动脚本
import subprocess
import time
import sys
import shutil

PORT = 8206

# 检查 wslview 是否存在
if shutil.which("wslview") is None:
    print("wslview 未安装，请先运行：sudo apt install wslu")
    sys.exit(1)

# 启动 MkDocs serve
proc = subprocess.Popen(["mkdocs", "serve", "-a", f"127.0.0.1:{PORT}"])

# 等待 1 秒让服务器启动
time.sleep(1)

# 打开浏览器
subprocess.run(["wslview", f"http://127.0.0.1:{PORT}"])

# 阻塞等待 MkDocs 结束
proc.wait()