// reports.js
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
    })
    .then(function() {
      // 绘制解决率趋势图
      const ctx = document.getElementById('resolutionRateChart').getContext('2d');
      
      // 模拟数据 - 实际项目中应从API获取
      const labels = Array.from({length: 30}, (_, i) => `6月${i+1}日`);
      const successData = Array.from({length: 30}, () => Math.floor(Math.random() * 30) + 50);
      const refundData = Array.from({length: 30}, () => Math.floor(Math.random() * 15) + 5);
      const returnData = Array.from({length: 30}, () => Math.floor(Math.random() * 10) + 1);
      
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: '解决率',
              data: successData,
              borderColor: '#52c41a',
              backgroundColor: 'rgba(82, 196, 26, 0.1)',
              tension: 0.3,
              fill: true
            },
            {
              label: '赔偿不退货',
              data: refundData,
              borderColor: '#faad14',
              backgroundColor: 'rgba(250, 173, 20, 0.1)',
              tension: 0.3,
              fill: true
            },
            {
              label: '退货处理',
              data: returnData,
              borderColor: '#f5222d',
              backgroundColor: 'rgba(245, 34, 45, 0.1)',
              tension: 0.3,
              fill: true
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              min: 0,
              max: 100,
              ticks: {
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
          }
        }
      });
    });

  // 月份选择器事件
  const monthSelect = document.getElementById('month-select');
  monthSelect.addEventListener('change', function() {
    // 这里可以添加加载对应月份数据的逻辑
    console.log('选择月份:', this.value);
    // 模拟数据加载
    showLoading();
    setTimeout(() => {
      hideLoading();
      showToast('数据加载完成');
    }, 1000);
  });

  // 导出报告按钮事件
  const exportBtn = document.getElementById('export-report');
  exportBtn.addEventListener('click', function() {
    showLoading();
    // 模拟导出操作
    setTimeout(() => {
      hideLoading();
      showToast('报告导出成功，已开始下载');
      // 实际项目中这里会触发文件下载
    }, 1500);
  });

  // 查看详情按钮事件
  const detailButtons = document.querySelectorAll('.view-details');
  detailButtons.forEach(button => {
    button.addEventListener('click', function() {
      window.location.href = 'https://static.pm-ai.cn/projectproto/20251104/proj4b81f1d5be82/page4105.html?_t=1762343950818';
    });
  });

  // 分页按钮事件
  const paginationButtons = document.querySelectorAll('.pagination button:not(:disabled)');
  paginationButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (this.classList.contains('active')) return;
      
      document.querySelector('.pagination button.active').classList.remove('active');
      this.classList.add('active');
      
      // 这里可以添加加载对应页数据的逻辑
      showLoading();
      setTimeout(() => {
        hideLoading();
      }, 800);
    });
  });

  // 搜索功能
  const searchInput = document.querySelector('.search-filter input');
  const searchButton = document.querySelector('.search-filter button');
  
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
      showLoading();
      // 这里可以添加搜索逻辑
      setTimeout(() => {
        hideLoading();
        showToast(`搜索: ${query}`);
      }, 800);
    }
  }

  // 辅助函数
  function showLoading() {
    // 实际项目中可以添加更完善的加载指示器
    document.body.style.cursor = 'wait';
  }

  function hideLoading() {
    document.body.style.cursor = 'default';
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    toast.style.color = 'white';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '4px';
    toast.style.zIndex = '1000';
    toast.style.animation = 'fadeIn 0.3s';
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  function showOrderDetails(orderId) {
    // 跳转到指定详情页面
    window.location.href = 'https://static.pm-ai.cn/projectproto/20251104/proj4b81f1d5be82/page4105.html?_t=1762343950818';
  }
});