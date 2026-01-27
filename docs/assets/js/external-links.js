// 等待 DOM（HTML 结构）加载完成后执行
// 确保页面中的 <a> 链接元素已经存在
document.addEventListener("DOMContentLoaded", () => {

  // 查找所有 <a> 标签中，href 以 http 开头的链接
  // 一般认为这是「外部链接」（例如 https://xxx.com）
  document.querySelectorAll("a[href^='http']").forEach(link => {

    // 为外部链接设置 target="_blank"
    // 点击链接时在「新标签页」中打开，而不是覆盖当前文档页面
    link.setAttribute("target", "_blank");

    // 设置 rel="noopener"
    // 作用：
    // 1. 防止新打开的页面通过 window.opener 操作当前页面（安全）
    // 2. 提升性能，避免不必要的页面关联
    link.setAttribute("rel", "noopener");
  });
});
