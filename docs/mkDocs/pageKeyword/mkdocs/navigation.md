# 导航菜单 `nav`

!!! note "读法"
    nav 是 navigation 的缩写  
    英语：nav 
    日语：ナブ

!!! info "用途"
    **指定哪些 Markdown 页面显示在文档站点的导航栏中。**

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
                  - 标题'#': mkDocs/pageKeyword/docs/hash.md
              - mkdocs.yml:
                  - 导航菜单 nav: mkDocs/pageKeyword/mkdocs/navigation.md
          - 开发工具:
              - 启动脚本: mkDocs/pageTool/mkdocs-script.md
    ```
=== "view"
    ![图示](../../../mkDocs/img/MkDocs_navigation_1.png)

<hr style="border-top: 2px solid #e40e0eff; margin: 24px 0;">

# 列表元素 `-`

!!! note "读法"
    英语：dash
    日语：ダッシュ または ハイフン

!!! info "用途"
    **在 `nav:` 里，`-` 用于定义每一个菜单项**  
    **表示 YAML 列表（数组）中的每一个元素**

    - 子菜单通过缩进来实现分级
    - 格式：菜单名称: 文件路径

=== "code"
    ```yaml
    site_name: 资料文档

    nav:
      - MkDocs:
          - 关键字:
              - docs:
                  - 标题'#': mkDocs/pageKeyword/docs/hash.md
          - mkdocs.yml:
              - 导航菜单 nav: mkDocs/pageKeyword/mkdocs/navigation.md
    ```
=== "view"
    ![图示](../../../mkDocs/img/MkDocs_navigation_2.png)