// page4105.js
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
      
      // 添加客诉处理点击事件
      const complaintLink = document.querySelector('.nav-link[href="#"]');
      if (complaintLink) {
        complaintLink.addEventListener('click', function(e) {
          e.preventDefault();
          window.location.href = "https://static.pm-ai.cn/projectproto/20251104/proj4b81f1d5be82/page4105.html?_t=1762343950818";
        });
      }
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

  // 客诉详情弹窗功能
  const viewDetailBtns = document.querySelectorAll('.view-details');
  const modal = document.getElementById('complaint-modal');
  const closeModalBtn = document.querySelector('.close-modal');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const transcriptToggles = document.querySelectorAll('.transcript-toggle');

  // 打开详情弹窗
  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const complaintId = this.getAttribute('data-id');
      // 这里可以根据ID加载实际数据，目前使用模拟数据
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // 关闭详情弹窗
  closeModalBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  // 点击模态框外部关闭
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // 标签页切换
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // 移除所有标签和内容的active类
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // 添加当前标签和内容的active类
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // 文字记录切换
  transcriptToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const transcript = this.nextElementSibling;
      const icon = this.querySelector('i');
      
      if (transcript.classList.contains('show')) {
        transcript.classList.remove('show');
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
        this.innerHTML = '显示文字记录 <i class="bi bi-chevron-down"></i>';
      } else {
        transcript.classList.add('show');
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
        this.innerHTML = '隐藏文字记录 <i class="bi bi-chevron-up"></i>';
      }
    });
  });

  // 解决客诉按钮
  const resolveBtns = document.querySelectorAll('.resolve');
  resolveBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const complaintItem = this.closest('.complaint-item');
      const statusSpan = complaintItem.querySelector('.status');
      
      statusSpan.textContent = '已解决';
      statusSpan.classList.remove('pending', 'processing');
      statusSpan.classList.add('resolved');
      
      // 更新按钮状态
      const reopenBtn = document.createElement('button');
      reopenBtn.className = 'btn reopen';
      reopenBtn.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i> 重新打开';
      reopenBtn.addEventListener('click', function() {
        statusSpan.textContent = '待处理';
        statusSpan.classList.remove('resolved');
        statusSpan.classList.add('pending');
        this.replaceWith(resolveBtn.cloneNode(true));
      });
      
      this.replaceWith(reopenBtn);
      
      // 显示成功提示
      showToast('客诉已标记为已解决');
    });
  });

  // 转人工按钮
  const transferBtns = document.querySelectorAll('.transfer');
  transferBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      showToast('客诉已转交人工客服处理');
    });
  });

  // 重新打开按钮
  const reopenBtns = document.querySelectorAll('.reopen');
  reopenBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const complaintItem = this.closest('.complaint-item');
      const statusSpan = complaintItem.querySelector('.status');
      
      statusSpan.textContent = '待处理';
      statusSpan.classList.remove('resolved');
      statusSpan.classList.add('pending');
      
      // 创建解决按钮
      const resolveBtn = document.createElement('button');
      resolveBtn.className = 'btn resolve';
      resolveBtn.innerHTML = '<i class="bi bi-check-circle"></i> 标记解决';
      resolveBtn.addEventListener('click', function() {
        statusSpan.textContent = '已解决';
        statusSpan.classList.remove('pending');
        statusSpan.classList.add('resolved');
        this.replaceWith(reopenBtn.cloneNode(true));
      });
      
      this.replaceWith(resolveBtn);
      
      // 显示成功提示
      showToast('客诉已重新打开');
    });
  });

  // 显示Toast提示
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }

  // 添加CSS样式到head
  const style = document.createElement('style');
  style.textContent = `
    .toast {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      z-index: 1001;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .toast.show {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
});