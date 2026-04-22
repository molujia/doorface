// register.js
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

  // 注册表单验证
  const registerForm = document.getElementById('register-form');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const passwordStrength = document.querySelector('.password-strength');

  // 密码强度检测
  passwordInput.addEventListener('input', function() {
    const password = this.value;
    let strength = 0;
    
    // 重置样式
    passwordStrength.className = 'password-strength';
    
    if (password.length === 0) return;
    
    // 长度检查
    if (password.length >= 8) strength++;
    
    // 包含数字
    if (/\d/.test(password)) strength++;
    
    // 包含特殊字符
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    
    // 包含大写字母
    if (/[A-Z]/.test(password)) strength++;
    
    // 根据强度设置样式
    if (strength <= 2) {
      passwordStrength.classList.add('password-weak');
      document.querySelector('.strength-text').textContent = '密码强度: 弱';
    } else if (strength === 3) {
      passwordStrength.classList.add('password-medium');
      document.querySelector('.strength-text').textContent = '密码强度: 中';
    } else {
      passwordStrength.classList.add('password-strong');
      document.querySelector('.strength-text').textContent = '密码强度: 强';
    }
  });

  // 确认密码验证
  confirmPasswordInput.addEventListener('input', function() {
    if (this.value !== passwordInput.value) {
      this.setCustomValidity('两次输入的密码不一致');
    } else {
      this.setCustomValidity('');
    }
  });

  // 表单提交处理
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 验证表单
    if (!this.checkValidity()) {
      return;
    }
    
    // 模拟注册成功
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = '注册中...';
    
    // 模拟API请求延迟
    setTimeout(() => {
      alert('注册成功！即将跳转到登录页面');
      window.location.href = 'login.html';
    }, 1500);
  });
});