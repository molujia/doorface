// page5367.js
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

  // 撤销授权表单提交
  const revokeForm = document.getElementById('revokeForm');
  
  revokeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const storeId = document.getElementById('storeId').value;
    const orderId = document.getElementById('orderId').value;
    
    // 显示确认模态框
    currentAction = 'revokeAuth';
    modalTitle.textContent = '提交删除请求';
    modalMessage.textContent = `确认提交删除请求？店铺ID: ${storeId}${orderId ? `, 订单号: ${orderId}` : ''}`;
    confirmationModal.classList.add('active');
  });

  // 数据管理页面功能
  const deleteAccountBtn = document.getElementById('deleteAccountBtn');
  const uninstallAIBtn = document.getElementById('uninstallAIBtn');
  const exportDataBtn = document.getElementById('exportDataBtn');
  const confirmationModal = document.getElementById('confirmationModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  const confirmBtn = document.getElementById('confirmBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');

  let currentAction = null;

  // 删除账户按钮点击事件
  deleteAccountBtn.addEventListener('click', () => {
    currentAction = 'deleteAccount';
    modalTitle.textContent = '删除账户';
    modalMessage.textContent = '您确定要永久删除您的账户和所有相关数据吗？此操作不可撤销。';
    confirmationModal.classList.add('active');
  });

  // 导出数据按钮点击事件
  exportDataBtn.addEventListener('click', () => {
    currentAction = 'exportData';
    modalTitle.textContent = '导出数据';
    modalMessage.textContent = '系统将准备您的数据导出文件，可能需要几分钟时间。';
    confirmationModal.classList.add('active');
  });

  // 关闭模态框
  function closeModal() {
    confirmationModal.classList.remove('active');
    currentAction = null;
  }

  closeModalBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  // 确认操作
  confirmBtn.addEventListener('click', () => {
    switch(currentAction) {
      case 'revokeAuth':
        alert('您的删除请求已提交。我们将在7-30天内完成删除或去标识化处理。');
        revokeForm.reset();
        break;
      case 'deleteAccount':
        alert('您的账户删除请求已提交。我们将在24小时内处理您的请求。');
        break;

      case 'exportData':
        alert('数据导出已开始。完成后您将收到一封包含下载链接的电子邮件。');
        break;
    }
    closeModal();
  });

  // 点击模态框外部关闭
  confirmationModal.addEventListener('click', (e) => {
    if (e.target === confirmationModal) {
      closeModal();
    }
  });

  // 键盘事件
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && confirmationModal.classList.contains('active')) {
      closeModal();
    }
  });
});