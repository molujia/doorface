document.addEventListener("DOMContentLoaded", function() {
  // 填充客诉详情数据
  function fillComplaintDetails() {
    document.getElementById('order-id').textContent = 'ORD-2025-001';
    document.getElementById('complaint-type').textContent = '商品破损';
    document.getElementById('submit-time').textContent = '2025-06-15 14:30';
    document.getElementById('priority').textContent = '高优先级';
    document.getElementById('process-status').textContent = '待处理';
    
    document.getElementById('problem-description').textContent = '客户反映收到的商品外包装破损，内部商品有轻微损坏。客户提供了照片证明，希望获得赔偿或换货。';
    
    // 添加图片
    const imageGallery = document.getElementById('complaint-images');
    imageGallery.innerHTML = '';
    const img = document.createElement('img');
    img.src = 'https://placeholder.pics/svg/300x200/DEDEDE/555555/破损商品照片';
    img.loading = 'lazy';
    img.alt = '破损商品照片';
    imageGallery.appendChild(img);
    
    // 添加处理记录
    const progressTracker = document.getElementById('progress-tracker');
    progressTracker.innerHTML = `
      <div class="timeline-item">
        <div class="timeline-date">2025-06-15 14:35</div>
        <div class="timeline-content">AI客服初步响应</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2025-06-15 14:30</div>
        <div class="timeline-content">客诉提交</div>
      </div>
    `;
  }

  // 通话记录功能
  function initCallRecords() {
    const audioPlayers = document.querySelectorAll('.audio-player');
    
    audioPlayers.forEach(player => {
      const playBtn = player.querySelector('.play-btn');
      const progressBar = player.querySelector('.progress');
      const timeDisplay = player.querySelector('.time');
      const audio = player.querySelector('audio');
      
      playBtn.addEventListener('click', function() {
        if (audio.paused) {
          audio.play();
          this.innerHTML = '<i class="bi bi-pause-fill"></i>';
          this.classList.add('playing');
        } else {
          audio.pause();
          this.innerHTML = '<i class="bi bi-play-fill"></i>';
          this.classList.remove('playing');
        }
      });
      
      audio.addEventListener('timeupdate', function() {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
        
        const currentTime = formatTime(audio.currentTime);
        const duration = formatTime(audio.duration);
        timeDisplay.textContent = `${currentTime} / ${duration}`;
      });
      
      audio.addEventListener('ended', function() {
        playBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
        playBtn.classList.remove('playing');
      });
    });
    
    // 展开/收起文字记录
    const expandBtns = document.querySelectorAll('.expand-btn');
    expandBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const transcript = this.closest('.transcript');
        const isExpanded = transcript.classList.contains('expanded');
        
        if (isExpanded) {
          transcript.classList.remove('expanded');
          this.innerHTML = '<i class="bi bi-chevron-down"></i> 展开全部';
        } else {
          transcript.classList.add('expanded');
          this.innerHTML = '<i class="bi bi-chevron-up"></i> 收起';
        }
      });
    });
  }
  
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
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
    
    // 初始化通话记录功能
  initCallRecords();
  
  // 填充客诉详情数据
    function fillComplaintDetails() {
      document.getElementById('order-id').textContent = 'ORD-2025-001';
      document.getElementById('complaint-type').textContent = '商品破损';
      document.getElementById('submit-time').textContent = '2025-06-15 14:30';
      document.getElementById('priority').textContent = '高优先级';
      document.getElementById('process-status').textContent = '待处理';
      
      document.getElementById('problem-description').textContent = '客户反映收到的商品外包装破损，内部商品有轻微损坏。客户提供了照片证明，希望获得赔偿或换货。';
      
      // 添加图片
      const imageGallery = document.getElementById('complaint-images');
      imageGallery.innerHTML = '';
      const img = document.createElement('img');
      img.src = 'https://placeholder.pics/svg/300x200/DEDEDE/555555/破损商品照片';
      img.loading = 'lazy';
      img.alt = '破损商品照片';
      imageGallery.appendChild(img);
      
      // 添加处理记录
      const progressTracker = document.getElementById('progress-tracker');
      progressTracker.innerHTML = `
        <div class="timeline-item">
          <div class="timeline-date">2025-06-15 14:35</div>
          <div class="timeline-content">AI客服初步响应</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2025-06-15 14:30</div>
          <div class="timeline-content">客诉提交</div>
        </div>
      `;
    }

  // 弹窗功能
  const modal = document.getElementById('caseModal');
  const closeBtn = document.querySelector('.close-btn');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const viewDetailBtns = document.querySelectorAll('.case-actions .btn-primary');
  
  // 删除重复的弹窗打开代码

  // 打开弹窗
  viewDetailBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // 设置弹窗标题包含固定案件编号
      const modalTitle = document.querySelector('.modal-header h3');
      modalTitle.textContent = '客诉详情 #CS-2025-001';
      
      // 填充客诉详情
      fillComplaintDetails();
      
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // 关闭弹窗
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // 点击外部关闭弹窗
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Tab切换功能
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      
      // 更新按钮状态
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // 更新内容显示
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabId}-tab`) {
          content.classList.add('active');
        }
      });
    });
  });

  // 客诉管理页面功能
  const playButtons = document.querySelectorAll('.play-btn');
  const transcriptButtons = document.querySelectorAll('.transcript button');
  const caseButtons = document.querySelectorAll('.case-actions button');
  
  // 音频播放功能
  playButtons.forEach(button => {
    button.addEventListener('click', function() {
      const isPlaying = this.classList.contains('playing');
      
      if (isPlaying) {
        this.innerHTML = '<i class="bi bi-play-fill"></i>';
        this.classList.remove('playing');
      } else {
        this.innerHTML = '<i class="bi bi-pause-fill"></i>';
        this.classList.add('playing');
      }
    });
  });
  
  // 展开/收起转录文本
  transcriptButtons.forEach(button => {
    button.addEventListener('click', function() {
      const transcript = this.parentElement;
      const isExpanded = transcript.classList.contains('expanded');
      
      if (isExpanded) {
        transcript.classList.remove('expanded');
        this.innerHTML = '<i class="bi bi-chevron-down"></i> 展开全部';
      } else {
        transcript.classList.add('expanded');
        this.innerHTML = '<i class="bi bi-chevron-up"></i> 收起';
      }
    });
  });
  
  // 处理客诉按钮
  caseButtons.forEach(button => {
    button.addEventListener('click', function() {
      const caseCard = this.closest('.case-card');
      const statusElement = caseCard.querySelector('.case-status');
      
      if (this.classList.contains('btn-primary')) {
        // 查看详情按钮 - 展开内容
        const caseSummary = caseCard.querySelector('.case-summary p');
        const isExpanded = caseSummary.classList.contains('expanded');
        
        if (isExpanded) {
          caseSummary.classList.remove('expanded');
          caseSummary.style.webkitLineClamp = '2';
          this.innerHTML = '<i class="bi bi-eye-fill"></i> 查看详情';
        } else {
          caseSummary.classList.add('expanded');
          caseSummary.style.webkitLineClamp = 'unset';
          this.innerHTML = '<i class="bi bi-eye-slash-fill"></i> 收起详情';
        }
      } else if (this.classList.contains('btn-secondary')) {
        // 稍后处理按钮
        caseCard.style.opacity = '0.6';
        this.textContent = '已标记';
        this.disabled = true;
      }
    });
  });
  
  // 筛选功能
  const searchButton = document.querySelector('.search-btn');
  const dateFilter = document.getElementById('date-filter');
  const statusFilter = document.getElementById('status-filter');
  
  searchButton.addEventListener('click', function() {
    const dateValue = dateFilter.value;
    const statusValue = statusFilter.value;
    const caseCards = document.querySelectorAll('.case-card');
    
    caseCards.forEach(card => {
      const cardDate = card.querySelector('.case-date').textContent;
      const cardStatus = card.querySelector('.case-status').className.includes(statusValue);
      
      let dateMatch = true;
      if (dateValue !== 'all') {
        const today = new Date();
        const cardDateObj = new Date(cardDate);
        
        switch(dateValue) {
          case 'today':
            dateMatch = cardDateObj.toDateString() === today.toDateString();
            break;
          case 'week':
            const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
            dateMatch = cardDateObj >= weekStart;
            break;
          case 'month':
            const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
            dateMatch = cardDateObj >= monthStart;
            break;
        }
      }
      
      const statusMatch = statusValue === 'all' || cardStatus;
      
      if (dateMatch && statusMatch) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});