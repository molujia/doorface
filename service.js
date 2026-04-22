// 服务条款页面交互功能

document.addEventListener('DOMContentLoaded', function() {
  // 确保语言切换功能正常工作
  function initLanguageSwitcher() {
    // 确保 i18n.js 的函数可用
    if (typeof updatePageLanguage === 'function' && typeof setLanguage === 'function') {
      // 获取当前语言并更新页面
      var currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : (localStorage.getItem('language') || 'en');
      updatePageLanguage(currentLang);
      
      // 确保语言切换下拉选择框的值正确
      var langSelects = document.querySelectorAll('.lang-select, #language-select');
      langSelects.forEach(function(select) {
        if (select.value !== currentLang) {
          select.value = currentLang;
        }
      });
    } else {
      // 如果 i18n.js 还没加载，延迟重试
      setTimeout(initLanguageSwitcher, 100);
    }
  }
  
  // 延迟执行，确保所有脚本都已加载
  setTimeout(initLanguageSwitcher, 300);
  
  // 平滑滚动到锚点
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

