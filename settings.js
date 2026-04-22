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

  // 步骤切换功能
  const steps = document.querySelectorAll('.step');
  const stepPanels = document.querySelectorAll('.step-panel');
  
  steps.forEach(step => {
    step.addEventListener('click', function() {
      const stepNumber = this.dataset.step;
      setActiveStep(stepNumber);
    });
  });

  // 下一步/上一步按钮
  document.querySelectorAll('.btn-next').forEach(btn => {
    btn.addEventListener('click', function() {
      const nextStep = this.dataset.next;
      setActiveStep(nextStep);
    });
  });

  document.querySelectorAll('.btn-prev').forEach(btn => {
    btn.addEventListener('click', function() {
      const prevStep = this.dataset.prev;
      setActiveStep(prevStep);
    });
  });

  function setActiveStep(stepNumber) {
    // 更新步骤指示器
    steps.forEach(step => {
      if (step.dataset.step === stepNumber) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    // 更新步骤面板
    stepPanels.forEach(panel => {
      if (panel.id === `step-${stepNumber}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // 滚动到顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // 授权方式切换
  const authBtns = document.querySelectorAll('.auth-btn');
  const apiKeyGroup = document.querySelector('.api-key-group');
  
  authBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      authBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      if (this.dataset.type === 'api') {
        apiKeyGroup.style.display = 'block';
      } else {
        apiKeyGroup.style.display = 'none';
      }
    });
  });

  // 添加电话号码
  const addPhoneBtn = document.querySelector('.btn-add-phone');
  const phoneForm = document.querySelector('.phone-form');
  
  if (addPhoneBtn && phoneForm) {
    addPhoneBtn.addEventListener('click', function() {
      phoneForm.style.display = 'block';
      this.style.display = 'none';
    });

    document.querySelector('.phone-form .btn-cancel').addEventListener('click', function() {
      phoneForm.style.display = 'none';
      addPhoneBtn.style.display = 'block';
    });
  }

  // 文件上传
  const uploadBtn = document.querySelector('.btn-upload');
  const fileInput = document.getElementById('knowledge-upload');
  
  if (uploadBtn && fileInput) {
    uploadBtn.addEventListener('click', function() {
      fileInput.click();
    });

    fileInput.addEventListener('change', function() {
      if (this.files.length > 0) {
        // 这里可以添加文件上传逻辑
        console.log('选择了文件:', this.files);
      }
    });
  }

  // 显示/隐藏密码
  const showPasswordBtn = document.querySelector('.btn-show-password');
  const passwordInput = document.getElementById('email-password');
  
  if (showPasswordBtn && passwordInput) {
    showPasswordBtn.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.innerHTML = '<i class="bi bi-eye-slash"></i>';
      } else {
        passwordInput.type = 'password';
        this.innerHTML = '<i class="bi bi-eye"></i>';
      }
    });
  }

  // 支付方式选择
  const paymentMethods = document.querySelectorAll('.payment-method');
  
  paymentMethods.forEach(method => {
    method.addEventListener('click', function() {
      paymentMethods.forEach(m => m.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // 确认支付按钮
  const confirmBtn = document.querySelector('.btn-confirm');
  
  if (confirmBtn) {
    confirmBtn.addEventListener('click', function() {
      // 这里可以添加支付验证和提交逻辑
      alert('支付成功！AI助理设置已完成。');
      // 可以跳转到控制台页面
      // window.location.href = 'dashboard.html';
    });
  }
});