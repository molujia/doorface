document.addEventListener('DOMContentLoaded', function() {
  const headerComponent = document.querySelector('.header-component');
  
  if (!headerComponent) {
    return; // 如果 header 不存在，直接返回
  }
  
  // 检查用户是否登录（模拟）
  const isLoggedIn = false; // 实际应用中应从cookie/localStorage获取
  
  // 根据登录状态切换显示
  const authButtons = headerComponent.querySelector('.auth-buttons');
  const userMenu = headerComponent.querySelector('.user-menu');
  
  if (authButtons) {
    if (isLoggedIn) {
      authButtons.classList.add('hidden');
    } else {
      authButtons.classList.remove('hidden');
    }
  }
  
  if (userMenu) {
    if (isLoggedIn) {
      userMenu.classList.remove('hidden');
    } else {
      userMenu.classList.add('hidden');
    }
  }
  
  // 移动端菜单切换
  const mobileMenuToggle = headerComponent.querySelector('.mobile-menu-toggle');
  const mainNav = headerComponent.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mainNav.classList.toggle('active');
    
    // 动画效果
    const spans = this.querySelectorAll('span');
    if (this.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
    });
  }
  
  // 搜索框交互
  const searchInput = headerComponent.querySelector('.search-input');
  const searchButton = headerComponent.querySelector('.search-button');
  
  if (searchInput && searchButton) {
    searchButton.addEventListener('click', function() {
    if (searchInput.value.trim()) {
      alert('搜索: ' + searchInput.value);
      // 实际应用中应执行搜索操作
    }
    });
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && this.value.trim()) {
        alert('搜索: ' + this.value);
        // 实际应用中应执行搜索操作
      }
    });
  }
  
  // 窗口大小变化时调整布局
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      const mobileMenuToggle = headerComponent.querySelector('.mobile-menu-toggle');
      const mainNav = headerComponent.querySelector('.main-nav');
      
      if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (spans && spans.length >= 3) {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      }
    }
  });
});