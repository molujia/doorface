// dashboard.js
function handleComplaintClick(e) {
  e.preventDefault();
  window.location.href = 'page4105.html';
}

function handleAISubmit() {
  // 这里可以添加提交逻辑
  window.location.href = 'https://static.pm-ai.cn/projectproto/20251104/proj4b81f1d5be82/setup.html?_t=1762344716175';
}



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
      
      // 初始化解决率趋势图
      initResolutionRateChart();
      // 初始化词云图
      initWordCloud();
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
  
  // 模拟数据加载效果
  const metricCards = document.querySelectorAll('.metric-card');
  metricCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
  
  // 为表格行添加点击事件
  const tableRows = document.querySelectorAll('.table-row');
  tableRows.forEach(row => {
    row.addEventListener('click', function(e) {
      // 如果点击的是链接则不处理
      if (e.target.tagName === 'A') return;
      
      // 如果有自定义跳转链接
      if (this.dataset.href) {
        window.location.href = this.dataset.href;
      } else {
        console.log('查看通话详情:', this.querySelector('div:nth-child(2)').textContent);
      }
    });
  });
  
  // 为操作卡片添加悬停效果
  const actionCards = document.querySelectorAll('.action-card');
  actionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('i').style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', function() {
      this.querySelector('i').style.transform = 'scale(1)';
    });
    
    // 为客诉处理卡片添加点击事件
    if (card.querySelector('h3').textContent === '处理客诉') {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'page4105.html';
      });
    }
    
    // 为AI客服设置卡片添加点击事件
    if (card.querySelector('h3').textContent === '设置AI客服') {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'https://static.pm-ai.cn/projectproto/20251104/proj4b81f1d5be82/setup.html?_t=1762344716175';
      });
    }
  });
  
  // 解决率趋势图初始化函数
  function initResolutionRateChart() {
    const ctx = document.getElementById('resolutionRateChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        datasets: [{
          label: '解决率',
          data: [85, 88, 90, 89, 91, 92, 94],
          backgroundColor: 'rgba(24, 144, 255, 0.1)',
          borderColor: '#1890FF',
          borderWidth: 2,
          tension: 0.3,
          fill: true,
          pointBackgroundColor: '#1890FF',
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.parsed.y + '%';
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 80,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });
  }
  
  
  
  
});