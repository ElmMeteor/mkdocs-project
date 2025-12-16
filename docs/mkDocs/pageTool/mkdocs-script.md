# 自动启动脚本

MkDocs测试，需要后台启动测试`mkdocs serve`之后，打开浏览器，手动输入URL，显示最新页面  
且，关闭页面时，无法自动关闭后台运行的端口，需手动查询之后，再进行关闭，十分不便  
此时，可以使用以下脚本，在测试时自动打开网页，无需手动输入 URL。

* 首先安装 wslview（wslu）
    ```
    sudo apt update
    sudo apt install wslu
    ```
* 安装后确认
    ```
    which wslview
    ```

下面有两个自动启动测试网页的脚本，可自行选择

=== "serve.py(Python 脚本)"
    ```
    import subprocess
    import time
    import sys
    import shutil

    PORT = [端口地址](eg:8206)

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
    ```
    * 在 `.vscode/launch.json` 中创建任务：
        ```
        {
            "version": "0.2.0",
            "configurations": [
                {
                    "name": "Python: MkDocs Serve",
                    "type": "python",
                    "request": "launch",
                    "program": "${workspaceFolder}/serve.py",
                    "console": "integratedTerminal"
                }
            ]
        }
        ```
    > 使用 Python 调试器调试（F5）或 `python serve.py` 即可启动测试  
      ![图示](../../mkDocs/img/MkDocs_Script_1.png)  
    > Ctrl+C 或停止按钮退出测试，端口自动释放

=== "serve.sh(Bash 脚本)"
    **此脚本无法自动关闭后台端口，需手动关闭**
    
    ```
    #!/bin/bash

    # -----------------------------
    # MkDocs 一键启动脚本 (WSL)
    # -----------------------------

    # 配置端口
    PORT=[端口地址](eg:8206)

    # 检查 wslview 是否安装
    if ! command -v wslview &> /dev/null
    then
        echo "wslview 未安装，请先运行：sudo apt install wslu"
        exit 1
    fi

    # 启动 MkDocs serve（前台运行）
    echo "启动 MkDocs serve 在端口 $PORT ..."
    mkdocs serve -a 127.0.0.1:$PORT &

    # 获取 MkDocs 进程 PID
    MKDOCS_PID=$!

    # 等待 1 秒，让服务器启动
    sleep 1

    # 自动在 Windows 浏览器打开
    wslview http://127.0.0.1:$PORT

    # 等待 MkDocs 前台运行（阻塞终端）
    wait $MKDOCS_PID
    ```
    * 给予执行权限(只需第一次启动前执行)
        ```
        chmod +x serve.sh
        ```
    * 启动测试
        ```
        ./serve.sh
        ```
    * 查找占用端口的进程
        ```
        lsof -i :[端口地址](eg:8000)
        ```
    * 关闭启动中的端口
        ```
        kill [启动中的进程码](eg:45631)
        ```

