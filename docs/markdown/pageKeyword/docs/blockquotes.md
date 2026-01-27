# 引用块（Blockquotes）

---

!!! info "什么是引用块？"
    在 Markdown 中，**引用块**用于突出显示被引用的内容或段落。  
    只需在段落前加上 `>` 即可创建引用块。

=== "Markdown"
    ```markdown
    > Dorothy followed her through many of the beautiful rooms in her castle.
    ```
=== "效果"
    > Dorothy followed her through many of the beautiful rooms in her castle.

---

<h2>多段引用</h2>

!!! tip "多段引用写法"
    引用块可以包含多个段落。  
    **每个段落前都需要加 `>`，包括中间的空行。**

=== "Markdown"
    ```markdown
    > Dorothy followed her through many of the beautiful rooms in her castle.
    >
    > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
    ```
=== "效果"
    > Dorothy followed her through many of the beautiful rooms in her castle.
    >
    > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

---

<h2>嵌套引用</h2>

!!! info "嵌套引用写法"
    在引用块中使用多个 `>` 可以实现嵌套引用。  
    `>>` 表示第二层引用，`>>>` 表示第三层，以此类推。

=== "Markdown"
    ```markdown
    > Dorothy followed her through many of the beautiful rooms in her castle.
    >
    >> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
    ```
=== "效果"
    > Dorothy followed her through many of the beautiful rooms in her castle.
    >
    >> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

---

<h2>引用块内嵌其他元素</h2>

!!! tip "引用块中使用 Markdown 元素"
    引用块中可以包含标题、列表、强调等 Markdown 元素。  
    但并非所有元素在所有解析器中都完全一致，需注意预览效果。

=== "Markdown"
    ```markdown
    > <h4>The quarterly results look great!</h4>
    >
    > - Revenue was off the chart.
    > - Profits were higher than ever.
    >
    > *Everything* is going according to **plan**.
    ```
=== "效果"
    > <h4>The quarterly results look great!</h4>
    >
    > - Revenue was off the chart.
    > - Profits were higher than ever.
    >
    > *Everything* is going according to **plan**.

---

<h2>引用块最佳实践</h2>

!!! tip "兼容性建议"
    - 在引用块 **前后各留一个空行**
    - 可提高不同 Markdown 解析器下的渲染一致性，避免格式异常。

    === "✅ 推荐"
        ```markdown
        这是普通段落。

        > 这是一个引用块

        这是引用后的段落。
        ```
    === "❌ 不推荐"
        ```markdown
        这是普通段落。
        > 这是一个引用块
        这是引用后的段落。
        ```
---
