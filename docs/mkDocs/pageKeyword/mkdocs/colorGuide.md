# MkDocs Material 主题配色  

Material for MkDocs 的配色原理、基础用法与进阶自定义方法，适合自定义品牌色、调和阅读体验以及设置深浅模式切换。

---

<h2>基本理念</h2>

Material for MkDocs 遵循 Google Material Design 规范，拥有一套内置调和的主题色板，并允许用户通过简单配置实现**明暗模式切换**、**主色自定义**、**品牌配色替换**。

---

<h2>配色基本用法</h2>

<h3>设置主色与点缀色</h3>

在 `mkdocs.yml` 直接设置主色和点缀色：

```yaml
theme:
  name: material
  palette:
    - scheme: default  # 浅色模式
      primary: indigo  # 主色支持诸如 indigo, teal, orange 等色名
      accent: pink     # 点缀色
    - scheme: slate    # 深色模式
      primary: indigo
      accent: pink
```

<details>
<summary>主色与点缀色支持色名及预览（点击展开）</summary>

<div>

red  
<div style="background:#f44336;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

pink  
<div style="background:#e91e63;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

purple  
<div style="background:#9c27b0;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

deep purple  
<div style="background:#673ab7;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

indigo  
<div style="background:#3f51b5;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

blue  
<div style="background:#2196f3;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

light blue  
<div style="background:#03a9f4;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

cyan  
<div style="background:#00bcd4;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

teal  
<div style="background:#009688;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

green  
<div style="background:#4caf50;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

light green  
<div style="background:#8bc34a;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

lime  
<div style="background:#cddc39;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

yellow  
<div style="background:#ffeb3b;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

amber  
<div style="background:#ffc107;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

orange  
<div style="background:#ff9800;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

deep orange  
<div style="background:#ff5722;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

brown  
<div style="background:#795548;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

grey  
<div style="background:#9e9e9e;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

blue grey  
<div style="background:#607d8b;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

black  
<div style="background:#000;width:100%;height:20px;border-radius:4px;margin-bottom:10px"></div>

white  
<div style="background:#fff;width:100%;height:20px;border-radius:4px;border:1px solid #bbb;margin-bottom:10px"></div>

</div>
</details>

---

<h3>配色明暗模式自动切换</h3>

可以设置主题自动根据系统（或浏览器）明暗偏好来同步切换：

=== "code"
    ```yaml
    theme:
      palette:
        - media: "(prefers-color-scheme: light)" # 当用户的操作系统、浏览器“偏好配色方案”为“浅色模式”时，（比如 Windows/Mac 设置了浅色主题，或者浏览器是浅色），就用这套配色（scheme: default）
          scheme: default
          toggle:
            icon: material/brightness-7
            name: 切换为深色
        - media: "(prefers-color-scheme: dark)" # 当偏好为暗色/夜间模式时，就自动切换到 scheme: slate（深色）。
          scheme: slate
          toggle:
            icon: material/brightness-4
            name: 切换为浅色
    ```
    顶部右侧会出现明暗切换开关。
=== "view"
    <img src = "/mkDocs/assets/images/MkDocs_colorGuide_1.png" style = "width:30%">
    <img src = "/mkDocs/assets/images/MkDocs_colorGuide_2.png" style = "width:30%">


---

<h2>进阶自定义：自定义品牌配色</h2>

如果内置色板无法满足品牌或美学需求，可用 CSS 变量彻底“换肤”。

<h3>步骤一：mkdocs.yml 启用 custom 配色</h3>

```yaml
theme:
  palette:
    - scheme: default
      primary: custom # custom 表示使用自定义 CSS 变量
      accent: custom
```

<h3>步骤二：extra.css 定义主色、点缀色、背景色</h3>

```css
/* =========================
 * Light mode（默认主题）
 * ========================= */
[data-md-color-scheme="default"] {

  /* 主色（Header、主按钮、导航栏等） */
  --md-primary-fg-color:        #48482D;  /* 主背景色 */
  --md-primary-fg-color--light: #CECE6B;  /* 主色浅色 */
  --md-primary-fg-color--dark:  #333126;  /* 主色深色 */

  /* 点缀色（链接、高亮、选中状态等） */
  --md-accent-fg-color:         #CECE6B;  /* 默认强调色 */
  --md-accent-fg-color--light:  #48482D;  /* 强调色浅色 */
  --md-accent-fg-color--dark:   #333126;  /* 强调色深色 */

  /* 页面默认背景色 */
  --md-default-bg-color:        #f7f8fa;
}

/* h1标题颜色 */
[data-md-color-scheme="default"] .md-typeset h1 { color: #48482D; }

```
> 还可以通过.md-typeset 来自定义标签的对应颜色

---

<h3>深色主题也能定制</h3>

```css
/* =========================
 * Dark mode（slate 主题）
 * ========================= */
[data-md-color-scheme="slate"] {

  /* 主色（Header、主按钮、导航栏等） */
  --md-primary-fg-color:        #E6E4BF;  /* 主背景色 */
  --md-primary-fg-color--light: #E2E788;  /* 主色的浅色，用于 hover 等 */
  --md-primary-fg-color--dark:  #636309;  /* 主色的深色，用于强调 */

  /* 点缀色（链接、高亮、选中状态等） */
  --md-accent-fg-color:         #636309;  /* 默认强调色 */
  --md-accent-fg-color--light:  #E2E788;  /* 强调色浅色 */
  --md-accent-fg-color--dark:   #E6E4BF;  /* 强调色深色 */

  /* 页面顶栏文字 */
  --md-primary-bg-color: #1E2129;
}
```

---

<h3>完全自定义主题方案</h3>

你还可自定义命名皮肤：

```yaml
theme:
  palette:
    - scheme: youtube
      primary: custom
      accent: custom
```
```css
[data-md-color-scheme="youtube"] {
  --md-primary-fg-color: #EE0F0F;
  --md-primary-fg-color--light: #ECB7B7;
  --md-primary-fg-color--dark: #90030C;
}
```

---

<h2>进阶提示</h2>

- **自动色调（slate）**：深色 slate 方案可用 `--md-hue: 210;` 快速整体冷暖调节。
- [官方变量一览](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/#color-palette)：如需彻底定制所有区块色，参考文档里的变量名。
- 只用 CSS 变量而不动 `body`、`html`，可兼容所有主题和色彩切换。

---

<h2>配色推荐</h2>

- 别用纯白/纯黑做背景，推荐淡灰、暖白或米色。
- 主色/高亮色建议同色系搭配，避免太强对撞。
- 颜色查找，[Coolors配色器](https://coolors.co/)、[Material配色](https://mui.com/material-ui/customization/color/)。

---
