document.addEventListener("DOMContentLoaded", function() {
  // 加载头部
  fetch("header.html")
    .then(function(response) { return response.text(); })
    .then(function(html) {
      document.getElementById("header-container").innerHTML = html;
      // 加载头部CSS
      var headerCSS = document.createElement("link");
      headerCSS.rel = "stylesheet";
      headerCSS.href = "header.css";
      document.head.appendChild(headerCSS);
    });
  
  // 加载底部
  fetch("footer.html")
    .then(function(response) { return response.text(); })
    .then(function(html) {
      document.getElementById("footer-container").innerHTML = html;
      // 加载底部CSS
      var footerCSS = document.createElement("link");
      footerCSS.rel = "stylesheet";
      footerCSS.href = "footer.css";
      document.head.appendChild(footerCSS);
    });

  // 登录表单处理
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // 简单验证
      if (!email || !password) {
        alert('请输入邮箱/手机号和密码');
        return;
      }
      
      // 这里应该是实际的登录逻辑
      console.log('登录信息:', { email, password });
      
      // 模拟登录成功
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }
  
  // 社交登录按钮处理
  const googleBtn = document.querySelector('.social-btn.google');
  const facebookBtn = document.querySelector('.social-btn.facebook');
  
  if (googleBtn) {
    googleBtn.addEventListener('click', function() {
      console.log('Google登录');
      // 这里应该是实际的Google登录逻辑
    });
  }
  
  if (facebookBtn) {
    facebookBtn.addEventListener('click', function() {
      console.log('Facebook登录');
      // 这里应该是实际的Facebook登录逻辑
    });
  }
  
  // 忘记密码链接
  const forgotPassword = document.querySelector('.forgot-password');
  if (forgotPassword) {
    forgotPassword.addEventListener('click', function(e) {
      e.preventDefault();
      alert('密码重置链接已发送到您的邮箱');
      // 这里应该是实际的忘记密码逻辑
    });
  }
});