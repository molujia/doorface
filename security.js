document.addEventListener("DOMContentLoaded", function() {
  // 检查 header-container 是否为空，如果为空才加载
  var headerContainer = document.getElementById("header-container");
  if (headerContainer && (!headerContainer.innerHTML || headerContainer.innerHTML.trim() === "")) {
    // 加载头部
    fetch("header.html")
      .then(function(response) { 
        if (!response.ok) throw new Error('Failed to load header');
        return response.text(); 
      })
      .then(function(html) {
        if (headerContainer) {
          headerContainer.innerHTML = html;
          // 检查登录状态并更新头部
          updateHeaderBasedOnLoginStatus();
          // 触发语言更新
          if (typeof updatePageLanguage === 'function') {
            var currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : (localStorage.getItem('language') || 'en');
            setTimeout(function() {
              updatePageLanguage(currentLang);
            }, 100);
          }
        }
      })
      .catch(function(error) {
        console.warn('Failed to load header:', error);
      });
  } else {
    // 如果 header 已存在，也触发语言更新
    if (typeof updatePageLanguage === 'function') {
      var currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : (localStorage.getItem('language') || 'en');
      setTimeout(function() {
        updatePageLanguage(currentLang);
      }, 100);
    }
  }
  
  // 检查 footer-container 是否为空，如果为空才加载
  var footerContainer = document.getElementById("footer-container");
  if (footerContainer && (!footerContainer.innerHTML || footerContainer.innerHTML.trim() === "")) {
    // 加载底部
    fetch("footer.html")
      .then(function(response) { 
        if (!response.ok) throw new Error('Failed to load footer');
        return response.text(); 
      })
      .then(function(html) {
        if (footerContainer) {
          footerContainer.innerHTML = html;
          // 触发语言更新
          if (typeof updatePageLanguage === 'function') {
            var currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : (localStorage.getItem('language') || 'en');
            setTimeout(function() {
              updatePageLanguage(currentLang);
            }, 100);
          }
        }
      })
      .catch(function(error) {
        console.warn('Failed to load footer:', error);
      });
  } else {
    // 如果 footer 已存在，也触发语言更新
    if (typeof updatePageLanguage === 'function') {
      var currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : (localStorage.getItem('language') || 'en');
      setTimeout(function() {
        updatePageLanguage(currentLang);
      }, 100);
    }
  }
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // 动画效果 - 安全页面特定元素
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.commitment-card, .measure-item, .compliance-card, .policy-item');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // 初始化元素样式
  document.querySelectorAll('.commitment-card, .measure-item, .compliance-card, .policy-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // 滚动事件监听
  window.addEventListener('scroll', animateOnScroll);
  // 初始加载时也触发一次
  animateOnScroll();
});

// 模拟登录状态检查
function updateHeaderBasedOnLoginStatus() {
  // 这里应该是从cookie或localStorage检查真实登录状态
  const isLoggedIn = false; // 默认为未登录状态
  
  if (isLoggedIn) {
    // 如果已登录，更新头部显示用户信息
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
      loginBtn.style.display = 'none';
    }
    
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
      userMenu.style.display = 'block';
    }
  }
}

