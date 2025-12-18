# 导航菜单 `nav`

!!! note "读法"
    nav 是 navigation 的缩写  
    英语：nav  
    日语：ナブ

!!! info "用途"
    **用来控制哪些 Markdown 页面会显示在文档站点的左侧或顶部导航栏。你可以通过合理配置 nav，让文档结构更清晰、更易于访问。**

=== "code"
    ```yaml
    site_name: 资料文档

    nav:
      - Home: index.md
      - MkDocs:
          - 概要: mkDocs/mkdocs-overview.md
          - 新建 MkDocs 项目: mkDocs/mkdocs-new.md
          - 新建网页: mkDocs/mkdocs-page.md
          - 关键字:
              - docs:
                  - 标题 '#': mkDocs/pageKeyword/docs/hash.md
              - mkdocs.yml:
                  - 导航菜单 nav: mkDocs/pageKeyword/mkdocs/navigation.md
          - 开发工具:
              - 启动脚本: mkDocs/pageTool/mkdocs-script.md
    ```
=== "view"
    ![图示](/mkDocs/assets/images/MkDocs_navigation_1.png)

---

<h2>nav 编写补充说明</h2>

- 可以根据需要嵌套无限级子菜单，建议不要超过 3~4 层，否则导航效果会变差。
- 每个列表项的格式为：**菜单名: 文件路径**，路径和文件名需与实际文件完全一致（区分大小写）。
- 首页推荐使用 `index.md`，如果缺失会导致文档 index 404。

<hr style="border-top: 2px solid #e40e0eff; margin: 24px 0;">

# 列表元素 `-`

!!! note "读法"
    英语：dash（短横线）
    日语：ダッシュ または ハイフン

!!! info "用途"
    **在 `nav:` 下，每个 `-` 表示一个菜单项，也就是 YAML 列表（数组）的每个元素。可通过缩进实现子菜单、分级导航。**

    - 子菜单通过缩进控制，缩进建议统一使用 2~4 个空格（不要用 Tab）。
    - 格式：`菜单名称: 文件路径`，冒号后建议加空格，提升可读性。
    - 通过分级，可以构建清晰的文档结构与知识体系。

=== "code"
    ```yaml
    site_name: 资料文档

    nav:
      - MkDocs:
          - 关键字:
              - docs:
                  - 标题 '#': mkDocs/pageKeyword/docs/hash.md
          - mkdocs.yml:
              - 导航菜单 nav: mkDocs/pageKeyword/mkdocs/navigation.md
    ```
=== "view"
    ![图示](/mkDocs/assets/images/MkDocs_navigation_2.png)

---

<h2>常见易错点补充</h2>

- YAML 缩进严格，建议统一用空格，缩进错误会导致 MkDocs 解析失败。
- 路径要和实际 `.md` 文件名大小写一一对应（尤其在 Linux 部署环境）。
- 菜单项支持中文，建议名称精简、唯一。
- `nav:` 不是必须项；如不写，则文档页面会按目录自动导航（但自主配置 nav 更灵活、推荐这样做）。