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
  
  // 时间线动画效果
  const animateTimelineOnScroll = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      const elementPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
        const marker = item.querySelector('.timeline-marker');
        if (marker) {
          marker.style.transform = 'translateX(-50%) scale(1)';
        }
      }
    });
  };

  // 初始化时间线元素样式
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    const marker = item.querySelector('.timeline-marker');
    if (marker) {
      marker.style.transform = 'translateX(-50%) scale(0)';
      marker.style.transition = 'transform 0.6s ease';
    }
  });
  
  // 滚动事件监听
  window.addEventListener('scroll', animateTimelineOnScroll);
  // 初始加载时也触发一次
  animateTimelineOnScroll();
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

