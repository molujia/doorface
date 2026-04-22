// 平滑滚动效果
// 只处理锚点链接，排除资源链接和footer-links-container中的链接
document.querySelectorAll('.footer-link:not(.footer-links-container .footer-link):not(.footer-links .footer-link)').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // 如果是外部链接，直接跳转
    if (href && href.startsWith('http')) {
      window.open(href, '_blank');
      return;
    }
    
    // 如果是内部锚点链接，平滑滚动
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    // 其他情况（如普通页面链接）不阻止默认行为，允许正常跳转
  });
});

// 社交媒体链接点击事件
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(this.getAttribute('href'), '_blank');
  });
});

// 动态年份更新
document.addEventListener('DOMContentLoaded', function() {
  const copyrightElements = document.querySelectorAll('.copyright');
  const currentYear = new Date().getFullYear();
  
  copyrightElements.forEach(element => {
    element.textContent = element.textContent.replace('2023', currentYear);
  });
});