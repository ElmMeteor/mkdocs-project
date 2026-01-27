// 等待 DOM（HTML 结构）加载完成后执行
// 确保页面中的 <img> 元素已经存在
document.addEventListener("DOMContentLoaded", () => {

  // 查找所有带有 data-fallback 属性的 <img> 标签
  // data-fallback 用来指定：图片加载失败时使用的备用图片
  document.querySelectorAll("img[data-fallback]").forEach(img => {

    // 监听图片加载失败事件
    // 当 src 无法加载（网络异常 / 404 / 权限问题等）时触发
    img.onerror = () => {

      // 如果已经切换过 fallback，则不再重复处理
      // 防止 fallback 图片本身也加载失败导致死循环
      if (img.dataset.fallbackUsed) return;

      // 标记该图片已经使用过备用图片
      img.dataset.fallbackUsed = "true";

      // 将图片 src 切换为 data-fallback 中指定的备用图片
      img.src = img.dataset.fallback;
    };
  });
});