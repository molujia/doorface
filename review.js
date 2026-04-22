// review.js
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
  
  // 标签切换功能
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 移除所有active类
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // 添加active类到当前按钮和对应内容
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // 编辑按钮功能
  const editBtns = document.querySelectorAll('.edit-btn');
  editBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const contentCard = this.closest('.content-card');
      const contentView = contentCard.querySelector('.content-view');
      const isEditing = contentCard.classList.contains('editing');
      
      if (isEditing) {
        // 退出编辑模式
        contentCard.classList.remove('editing');
        this.innerHTML = '<i class="bi bi-pencil"></i> 编辑';
        
        // 获取富文本编辑器内容并更新到原始视图
        const editor = contentCard.querySelector('.ql-editor');
        if (editor) {
          contentView.innerHTML = editor.innerHTML;
          contentCard.querySelector('.quill-container').remove();
        }
      } else {
        // 进入编辑模式
        contentCard.classList.add('editing');
        this.innerHTML = '<i class="bi bi-check"></i> 完成';
        
        // 初始化富文本编辑器
        const quillContainer = document.createElement('div');
        quillContainer.className = 'quill-container';
        quillContainer.style.height = '300px';
        
        // 保存原始内容
        const originalContent = contentView.innerHTML;
        contentView.style.display = 'none';
        
        contentCard.querySelector('.card-content').appendChild(quillContainer);
        
        const quill = new Quill(quillContainer, {
          modules: {
            toolbar: [
              [{ 'header': [1, 2, 3, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['link', 'image'],
              ['clean']
            ]
          },
          placeholder: '输入内容...',
          theme: 'snow'
        });
        
        quill.root.innerHTML = originalContent;
      }
    });
  });
  
  // AI建议按钮功能
  const aiBtns = document.querySelectorAll('.ai-btn');
  const aiModal = document.getElementById('ai-suggestion-modal');
  const modalClose = document.querySelector('.modal-close');
  
  aiBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const contentView = this.closest('.content-card').querySelector('.content-view');
      const content = contentView.textContent;
      
      // 显示模态框
      aiModal.classList.add('show');
      
      // 模拟AI分析过程
      const aiContent = document.querySelector('.ai-suggestion-content');
      aiContent.innerHTML = '<p><i class="bi bi-robot"></i> AI正在分析您的内容...</p>';
      
      setTimeout(() => {
        // 模拟AI返回的建议
        const suggestions = generateAISuggestions(contentView);
        aiContent.innerHTML = suggestions;
      }, 1500);
    });
  });
  
  // 关闭模态框
  modalClose.addEventListener('click', function() {
    aiModal.classList.remove('show');
  });
  
  // 点击模态框外部关闭
  aiModal.addEventListener('click', function(e) {
    if (e.target === aiModal) {
      aiModal.classList.remove('show');
    }
  });
  
  // 生成AI建议的函数
  function generateAISuggestions(contentView) {
    const title = contentView.closest('.tab-content').querySelector('h3').textContent;
    let suggestions = '';
    
    if (title.includes('产品文档')) {
      suggestions = `
        <h4>AI建议 - 产品文档优化</h4>
        <ul>
          <li>建议添加产品规格参数，如尺寸、重量、功率等</li>
          <li>可以补充产品认证信息，如CE、FCC等</li>
          <li>考虑添加使用场景描述，帮助消费者想象使用场景</li>
          <li>建议增加"适用人群"部分，明确目标用户</li>
        </ul>
      `;
    } else if (title.includes('使用手册')) {
      suggestions = `
        <h4>AI建议 - 使用手册优化</h4>
        <ul>
          <li>建议添加安全警告和注意事项部分</li>
          <li>可以增加故障排除指南，帮助用户解决常见问题</li>
          <li>考虑添加图示说明，使操作步骤更直观</li>
          <li>建议补充维护保养周期和建议</li>
        </ul>
      `;
    } else if (title.includes('条形码')) {
      suggestions = `
        <h4>AI建议 - 条形码信息优化</h4>
        <ul>
          <li>建议添加条形码扫描示例图片</li>
          <li>可以补充条形码注册和查询方法</li>
          <li>考虑添加国际商品编码说明</li>
        </ul>
      `;
    } else if (title.includes('标准话术')) {
      suggestions = `
        <h4>AI建议 - 标准话术优化</h4>
        <ul>
          <li>建议添加价格和促销相关问答</li>
          <li>可以补充物流和配送常见问题</li>
          <li>考虑添加保修和退换货政策问答</li>
          <li>建议增加产品比较类问题的标准回答</li>
        </ul>
      `;
    }
    
    return suggestions;
  }
  
  // 确认按钮功能
  const confirmBtn = document.querySelector('.action-buttons .primary-btn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', function() {
      window.location.href = 'https://static.pm-ai.cn/projectproto/20251104/proj4b81f1d5be82/dashboard.html?_t=1762346235741';
    });
  }
  
  // 返回按钮功能
  const backBtn = document.querySelector('.action-buttons .secondary-btn');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      window.location.href = 'https://static.pm-ai.cn/projectproto/20251104/proj4b81f1d5be82/dashboard.html?_t=1762346235741';
    });
  }
});