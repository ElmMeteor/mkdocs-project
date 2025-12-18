# 管道符 `|` 用法（Markdown 表格与进阶技巧）

**`|`（管道符/竖线）是 Markdown 用于创建表格的核心符号，也是代码块、行内代码、数学表达、Shell 命令中的常见标记。**

---

!!! note "读法"
    - 英文：“pipe” /paɪp/
    - 日语：たてせん

---

!!! info "用途"
    - 在 Markdown 中**用于分隔表格的单元格与表头**
    - Shell、代码展示行内/多行管道流动作业
    - 非正式场合用于视觉对齐、美学列表

---

<h2>基本语法及效果速查</h2>

| 用法           | Markdown 原文                | 效果                   |
|:---------------|:----------------------------|:-----------------------|
| **表格分栏**   | \| A \| B \|                | 渲染为表格两列：<br> \| A \| B \| |
| **单元格对齐** | `| :- | :---: | --: |`      | 左对齐、居中、右对齐   |

---

=== "Markdown 表格"
    !!! example "标准写法"
        ```
        | 姓名      | 分数 |
        |-----------|------|
        | 张三      | 90   |
        | 李四      | 85   |
        ```

        效果：

        | 姓名  | 分数 |
        |-------|------|
        | 张三  | 90   |
        | 李四  | 85   |

    !!! tip "管道符数量不必严格等于列数，但建议对齐美观"
        - 可省略首尾管道符，但一般推荐加上

=== "单元格对齐控制"
    !!! example "设置对齐方式"
        ```
        | 左对齐 | 居中  | 右对齐 |
        |:------ |:----: | -----:|
        | left   | center| right |
        ```
        效果：

        | 左对齐 | 居中   | 右对齐  |
        |:------ |:-----:| ------:|
        | left   | center| right  |

    !!! info "冒号位置决定对齐"
        - `:---` 左对齐，`---:` 右对齐，`:---:` 居中

=== "Shell/编程管道"    
    ??? tip "Markdown/MkDocs Material 建站时，完全用不到 shell 管道（|）的“运行”功能。"
        **这里只是Shell管道的基础说明，想要了解的可以继续往下看**
        !!! info "什么是 Shell 管道？"
        Shell 管道（pipe）是 Unix/Linux/Mac 命令行（包括 Windows 的 WSL、Git Bash）中极其重要的功能。  
        **它用竖线 `|` 把多个命令连接在一起，让前一个命令的输出直接变成下一个命令的输入，形成像输水管一样的数据处理链。**
        通常用于对大量数据做“无中间文件”的多步处理，提高效率与灵活性。

        !!! example "最基础例子"
            ```sh
            ls | grep py
            ```
            - **含义**：
                1. `ls` 输出当前目录所有文件名
                2. 通过 `| grep py`，选出含有 `py` 的文件
            - **结果**：只看到含 py 的文件列表

        !!! example "多级管道操作"
            ```sh
            cat logs.txt | grep ERROR | sort | uniq -c | sort -nr
            ```
            - **分步说明**：
                1. `cat logs.txt` 读取日志
                2. `| grep ERROR` 过滤出含有“ERROR”的行
                3. `| sort` 排序
                4. `| uniq -c` 统计每种错误的出现次数
                5. `| sort -nr` 按出现次数从多到少排序
            - **结果**：你能快速列出日志中各类错误的频次，无需手工操作

        !!! example "把命令结果直接计数"
            ```sh
            ls | wc -l
            ```
            - `ls` 输出所有文件名，`| wc -l` 统计有多少行（多少文件）
            - 这种模式广泛用于批处理和日志核查

        !!! info "总结"
            - 管道是 Shell/命令行下数据流式处理的关键，常用组合如：`ps aux | grep xxx`、`find . | xargs rm` 等
            - 管道命令常用于数据清洗、日志分析、批量运维脚本

        !!! tip "跨语言思想"
            - 管道机制已影响到 JavaScript、Python 等现代语言，比如 JS 的 [管道操作符（提案）](https://github.com/tc39/proposal-pipeline-operator)：  
                ```js
                value |> func1 |> func2
                ```
            - Python 也常见 pandas 管道链式写法：  
                ```python
                df.pipe(func1).pipe(func2)
                ```

=== "显示正常竖线"
    !!! example "表格单元格中含管道（需转义或用代码）"
        ```
        | 示例      | 内容         |
        |:----------|:------------|
        | `a \| b`  | a \| b      |
        ```
        效果：

        | 示例      | 内容    |
        |:----------|:--------|
        | `a \| b`  | a \| b  |

    !!! warning "如果你要在表格单元格内显示正常竖线，必须用代码包裹或转义写成 `\|`"

---

<h2>FAQ</h2>

??? warning "末尾少一个 | 会怎样？"
    - Markdown 语法允许省略表格最左/最右的竖线，但推荐书写完整，更直观易读

---

!!! tip "掌握管道符 `|`，高效管理数据表与代码输出流！"
    - 多用可视化表格，可有效提升文档数据可读性与交流效率

---

**相关链接：**  
- [Markdown 官方表格文档](https://www.markdownguide.org/extended-syntax/#tables)
- [MkDocs Material 表格用法](https://squidfunk.github.io/mkdocs-material/reference/data-tables/)
- [Shell 命令管道符详解](https://www.gnu.org/software/bash/manual/html_node/Pipelines.html)