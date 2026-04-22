// user.js
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
  
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 打印按钮事件
  document.querySelector('.btn-primary').addEventListener('click', function() {
    window.print();
  });
  
  // 返回首页按钮事件
  document.querySelector('.btn-secondary').addEventListener('click', function() {
    window.location.href = 'home.html';
  });
});