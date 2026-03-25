# 文本增强（Emoji / 高亮 / 上下标）

---

!!! info "章节说明"
    本节介绍 **Markdown 中常见但非核心的文本增强写法**，包括 Emoji、高亮、下标与上标。  
    这些能力 **大多不是 Markdown Core 原生语法**，而是依赖扩展或渲染器支持，在 MkDocs Material 中通常可正常使用。

---

<h2>使用前说明：如何启用相关扩展（MkDocs）</h2>

---

!!! important "关键前置条件"
    本页涉及的 **Emoji Shortcode / 高亮 / 上下标** 等语法，  
    **需要在 `mkdocs.yml` 中显式启用对应扩展，否则不会生效。**

<h3>推荐的最小配置示例（MkDocs Material）</h3>

```yaml
markdown_extensions:
  - pymdownx.emoji       # Emoji Shortcode 支持
  - pymdownx.mark        # ==高亮== 语法
  - pymdownx.superfences # 更稳定的代码块解析（推荐）
```

---

## Emoji（表情符号）

---

!!! info "支持方式"
    在 Markdown 中插入 Emoji，常见有两种方式：
    
    1. **直接粘贴 Emoji 字符（推荐）**
    2. **使用 Emoji Shortcode（需扩展支持）**

---

<h3>方式一：直接复制粘贴（推荐）</h3>

直接从系统输入法或网站（如 Emojipedia）复制 Emoji，粘贴到 Markdown 文本中即可。

=== "Markdown"
    ```markdown
    文档构建成功 🎉  
    注意事项 ⚠️
    ```

=== "效果"
    文档构建成功 🎉  
    注意事项 ⚠️

!!! tip
    - 这是 **最稳定、最通用** 的方式
    - HTML / PDF 导出通常也能正确显示
    - 确保页面编码为 **UTF-8**

---

<h3>方式二：Emoji Shortcode（扩展语法）</h3>

某些 Markdown 渲染器支持使用 `:shortcode:` 形式的 Emoji。

=== "Markdown"
    ```markdown
    出门露营啦 :tent:  
    这也太好笑了 :joy:
    ```

=== "效果"
    出门露营啦 ⛺  
    这也太好笑了 😂

!!! warning
    - Emoji Shortcode **不是 Markdown 原生语法**
    - 不同平台支持的 shortcode 名称不同
    - 需启用如 `pymdownx.emoji` 等扩展

!!! info
    - 可以用 <a href="https://emojipedia.org/">Emojipedia</a> 查找并复制
    - 具体以你当前 Markdown 渲染器支持为准

---

## 文本高亮（Highlight）

---

!!! note "语法性质说明"
    文本高亮 **不是 Markdown Core 语法**，属于 **扩展语法或 HTML 能力**。

---

<h3>使用 `==` 高亮（扩展语法）</h3>

=== "Markdown"
    ```markdown
    我需要高亮这些 ==非常重要的内容==。
    ```
=== "效果"
    我需要高亮这些 <mark>非常重要的内容</mark>。

!!! warning
    - 需要渲染器支持（MkDocs Material 支持）
    - 在部分平台可能无法生效

---

<h3>使用 HTML `<mark>`（通用方案）</h3>

=== "Markdown"
    ```markdown
    这是 <mark>非常重要的内容</mark>，请注意。
    ```

=== "效果"
    这是 <mark>非常重要的内容</mark>，请注意。

!!! tip
    - HTML 写法 **兼容性最好**
    - 适合需要稳定渲染的文档

---

## 下标（Subscript）

---

!!! note "语法性质说明"
    下标 **不是 Markdown Core 原生语法**，属于扩展能力。

---

<h3>使用 `~` 语法（部分解析器支持）</h3>

=== "Markdown"
    ```markdown
    H~2~O
    ```
=== "效果"
    H<sub>2</sub>O

!!! warning
    - 有些解析器会把 `~` 当作删除线
    - 使用前请确认当前渲染环境支持

---

<h3>使用 HTML `<sub>`（推荐）</h3>

=== "Markdown"
    ```markdown
    H<sub>2</sub>O
    ```

=== "效果"
    H<sub>2</sub>O

!!! tip
    - HTML 写法最稳定
    - 适合技术文档、化学公式

---

## 上标（Superscript）

---

!!! note "语法性质说明"
    上标同样 **不是 Markdown Core 语法**，依赖扩展或 HTML。

---

<h3>使用 `^` 语法（部分解析器支持）</h3>

=== "Markdown"
    ```markdown
    X^2^
    ```
=== "效果"
    X<sup>2</sup>

!!! warning
    - 并非所有 Markdown 解析器支持
    - 不推荐用于高兼容性文档

---

<h3>使用 HTML `<sup>`（推荐）</h3>

=== "Markdown"
    ```markdown
    X<sup>2</sup>
    ```

=== "效果"
    X<sup>2</sup>

---

<h2>使用建议总结</h2>

---

!!! summary
    - Emoji：**直接粘贴字符最稳**
    - 高亮 / 上下标：**HTML 写法兼容性最好**
    - 扩展语法（`==` / `~` / `^`）使用前确认渲染器支持
    - 面向团队或长期维护文档，**优先稳定而非炫技**

---
