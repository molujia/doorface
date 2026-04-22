// oauth.js
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

  // OAuth按钮点击事件
  const oauthButton = document.getElementById('oauth-button');
  if (oauthButton) {
    oauthButton.addEventListener('click', function() {
      // 这里应该是实际的OAuth授权URL
      // 示例中使用了一个占位URL
      const authUrl = 'https://sellercentral.amazon.com/apps/authorize/consent';
      
      // 添加加载状态
      oauthButton.innerHTML = '<i class="bi bi-arrow-repeat"></i> 正在跳转...';
      oauthButton.disabled = true;
      
      // 模拟API调用延迟
      setTimeout(() => {
        window.location.href = authUrl;
      }, 1000);
    });
  }

  // 添加动画效果
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    setTimeout(() => {
      step.style.opacity = '1';
      step.style.transform = 'translateY(0)';
    }, index * 200);
  });
});