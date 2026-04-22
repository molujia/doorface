// insights.js
document.addEventListener("DOMContentLoaded", function() {
  // 初始化Chart.js
  Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  Chart.defaults.color = '#666';
  
  // 初始化地图图表
  const initRegionMap = () => {
    const ctx = document.createElement('canvas');
    ctx.id = 'regionMapChart';
    ctx.width = 600;
    ctx.height = 300;
    document.querySelector('#region-tab').prepend(ctx);
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['美西地区', '美中地区', '美东地区'],
        datasets: [{
          label: '消费者分布',
          data: [45, 28, 27],
          backgroundColor: ['#1890FF', '#722ED1', '#13C2C2']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: '消费者地域分布' }
        }
      }
    });
  };
  
  // 加载头部和底部
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

  // 消费者画像标签切换
  const profileTabs = document.querySelectorAll('.profile-tabs .tab-btn');
  profileTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // 移除所有active类
      document.querySelectorAll('.profile-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.insight-card .tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // 添加active类到当前标签和对应内容
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab') + '-tab';
      document.getElementById(tabId).classList.add('active');
    });
  });

  // 优化建议标签切换
  const suggestionTabs = document.querySelectorAll('.suggestion-tabs .tab-btn');
  suggestionTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // 移除所有active类
      document.querySelectorAll('.suggestion-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.suggestion-tabs + .tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // 添加active类到当前标签和对应内容
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab') + '-tab';
      document.getElementById(tabId).classList.add('active');
    });
  });

  // 刷新建议按钮
  document.getElementById('refresh-suggestions').addEventListener('click', function() {
    const btn = this;
    btn.innerHTML = '<i class="bi bi-arrow-clockwise"></i> 刷新中...';
    btn.disabled = true;
    
    // 模拟API调用延迟
    setTimeout(() => {
      // 这里应该是实际的API调用，我们只是模拟
      const suggestions = [
        {
          title: "物流问题话术优化",
          current: "我们会尽快处理您的物流问题",
          suggestion: "我们已联系物流公司优先处理您的订单(订单号)，预计24小时内更新物流信息。为表歉意，我们将赠送您一张10元优惠券，可在下次购物时使用。"
        },
        {
          title: "退货流程话术优化",
          current: "请按照退货流程操作",
          suggestion: "退货流程已发送至您的邮箱，包含图文指导。为简化您的操作，我们提供一键生成退货标签服务，点击此处即可获取。"
        }
      ];
      
      // 更新DOM
      const wordingTab = document.getElementById('wording-tab');
      wordingTab.innerHTML = `
        <div class="suggestion-item">
          <h3>${suggestions[0].title}</h3>
          <p>当前话术："${suggestions[0].current}"</p>
          <p class="suggestion-text">建议改为："${suggestions[0].suggestion}"</p>
          <div class="suggestion-actions">
            <button class="btn-accept">采纳建议</button>
            <button class="btn-modify">修改后采纳</button>
          </div>
        </div>
        <div class="suggestion-item">
          <h3>${suggestions[1].title}</h3>
          <p>当前话术："${suggestions[1].current}"</p>
          <p class="suggestion-text">建议改为："${suggestions[1].suggestion}"</p>
          <div class="suggestion-actions">
            <button class="btn-accept">采纳建议</button>
            <button class="btn-modify">修改后采纳</button>
          </div>
        </div>
      `;
      
      btn.innerHTML = '<i class="bi bi-arrow-clockwise"></i> 刷新建议';
      btn.disabled = false;
      
      // 显示成功提示
      showToast('建议已刷新', 'success');
    }, 1500);
  });

  // 生成营销策略按钮
  document.getElementById('generate-strategy').addEventListener('click', function() {
    const btn = this;
    btn.innerHTML = '<i class="bi bi-magic"></i> 生成中...';
    btn.disabled = true;
    
    // 模拟API调用延迟
    setTimeout(() => {
      // 这里应该是实际的API调用，我们只是模拟
      const strategies = [
        {
          title: "基于高频退货客户的策略",
          description: "针对过去3个月有2次以上退货记录的客户(共328人)：",
          items: [
            "发送个性化邮件，提供专属客服经理服务",
            "赠送'无忧购物券'(满200减30，限无退货使用)",
            "邀请参加新品预览会，提前体验产品"
          ]
        },
        {
          title: "基于高满意度客户的策略",
          description: "针对问题解决后给予5星评价的客户(共892人)：",
          items: [
            "邀请成为产品体验官，提供新品试用机会",
            "创建VIP客户群，提供专属优惠和优先购买权",
            "鼓励分享购物体验，提供分享奖励计划"
          ]
        }
      ];
      
      // 更新DOM
      const strategyContainer = document.querySelector('.insight-card .card-content');
      strategyContainer.innerHTML = `
        <div class="marketing-strategy">
          <h3>${strategies[0].title}</h3>
          <p>${strategies[0].description}</p>
          <ul>
            <li>${strategies[0].items[0]}</li>
            <li>${strategies[0].items[1]}</li>
            <li>${strategies[0].items[2]}</li>
          </ul>
        </div>
        <div class="marketing-strategy">
          <h3>${strategies[1].title}</h3>
          <p>${strategies[1].description}</p>
          <ul>
            <li>${strategies[1].items[0]}</li>
            <li>${strategies[1].items[1]}</li>
            <li>${strategies[1].items[2]}</li>
          </ul>
        </div>
        <div class="strategy-actions">
          <button class="btn-export">导出策略文档</button>
          <button class="btn-implement">一键实施策略</button>
        </div>
      `;
      
      btn.innerHTML = '<i class="bi bi-magic"></i> 生成新策略';
      btn.disabled = false;
      
      // 显示成功提示
      showToast('新策略已生成', 'success');
      
      // 重新绑定导出和实施按钮事件
      document.querySelector('.btn-export').addEventListener('click', exportStrategy);
      document.querySelector('.btn-implement').addEventListener('click', implementStrategy);
    }, 2000);
  });

  // 导出策略函数
  function exportStrategy() {
    // 模拟导出操作
    showToast('策略文档导出中...', 'info');
    setTimeout(() => {
      showToast('策略文档已导出', 'success');
    }, 1500);
  }

  // 实施策略函数
  function implementStrategy() {
    // 模拟实施操作
    showToast('策略实施中...', 'info');
    setTimeout(() => {
      showToast('策略已成功实施', 'success');
    }, 2000);
  }

  // 绑定外呼和短信按钮事件
  function bindExecutionButtons() {
    document.querySelectorAll('.btn-call').forEach(btn => {
      btn.addEventListener('click', function() {
        const strategyTitle = this.closest('.marketing-strategy').querySelector('h3').textContent;
        showToast(`正在外呼执行策略: ${strategyTitle}`, 'info');
      });
    });
    
    document.querySelectorAll('.btn-sms').forEach(btn => {
      btn.addEventListener('click', function() {
        const strategyTitle = this.closest('.marketing-strategy').querySelector('h3').textContent;
        showToast(`正在发送短信执行策略: ${strategyTitle}`, 'info');
      });
    });
  }

  // 显示Toast通知
  function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  // 时间筛选器变化事件
  document.getElementById('word-frequency-period').addEventListener('change', function() {
    updateWordFrequencyData(this.value);
  });
  
  document.getElementById('issue-period').addEventListener('change', function() {
    updateIssueData(this.value);
  });
  
  document.getElementById('profile-period').addEventListener('change', function() {
    updateProfileData(this.value);
  });

  // 更新高频词数据
  function updateWordFrequencyData(period) {
    // 这里应该是实际的API调用，我们只是模拟
    showToast(`正在加载最近${period}天的高频词数据...`, 'info');
    
    setTimeout(() => {
      // 模拟API返回的数据
      const wordData = {
        '7': [
          {text: '质量', size: 45},
          {text: '退货', size: 38},
          {text: '发货', size: 32},
          {text: '色差', size: 28},
          {text: '客服', size: 25},
          {text: '退款', size: 22},
          {text: '物流', size: 20},
          {text: '尺寸', size: 18},
          {text: '优惠', size: 15},
          {text: '破损', size: 12}
        ],
        '30': [
          {text: '质量', size: 65},
          {text: '退货', size: 50},
          {text: '发货', size: 42},
          {text: '色差', size: 35},
          {text: '客服', size: 30},
          {text: '退款', size: 28},
          {text: '物流', size: 25},
          {text: '尺寸', size: 22},
          {text: '优惠', size: 18},
          {text: '破损', size: 15}
        ],
        '90': [
          {text: '质量', size: 80},
          {text: '退货', size: 70},
          {text: '发货', size: 55},
          {text: '色差', size: 45},
          {text: '客服', size: 40},
          {text: '退款', size: 35},
          {text: '物流', size: 30},
          {text: '尺寸', size: 25},
          {text: '优惠', size: 20},
          {text: '破损', size: 18}
        ]
      };
      
      // 清空词云容器
      const wordCloudElement = document.getElementById('word-cloud');
      wordCloudElement.innerHTML = '';
      
      // 生成词云
      wordData[period].forEach(word => {
        const wordElement = document.createElement('span');
        wordElement.className = 'word-cloud-item';
        wordElement.textContent = word.text;
        wordElement.style.fontSize = `${word.size}px`;
        wordElement.style.color = getRandomColor();
        wordElement.style.margin = '5px';
        wordElement.style.padding = '3px 8px';
        wordElement.style.display = 'inline-block';
        wordElement.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        wordCloudElement.appendChild(wordElement);
      });
      
      showToast('高频词数据已更新', 'success');
    }, 1000);
  }
  
  // 生成随机颜色
  function getRandomColor() {
    const colors = ['#722ED1', '#1890FF', '#13C2C2', '#52C41A', '#FAAD14', '#F5222D'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // 更新问题数据
  function updateIssueData(period) {
    // 这里应该是实际的API调用，我们只是模拟
    showToast(`正在加载最近${period}天的问题数据...`, 'info');
    
    setTimeout(() => {
      // 模拟API返回的数据
      const issueData = {
        '7': {
          labels: ['物流问题', '产品质量', '售后服务', '其他问题'],
          data: [35, 25, 20, 20],
          colors: ['#1890FF', '#722ED1', '#13C2C2', '#FAAD14']
        },
        '30': {
          labels: ['物流问题', '产品质量', '售后服务', '其他问题'],
          data: [42, 28, 18, 12],
          colors: ['#1890FF', '#722ED1', '#13C2C2', '#FAAD14']
        },
        '90': {
          labels: ['物流问题', '产品质量', '售后服务', '其他问题'],
          data: [38, 32, 20, 10],
          colors: ['#1890FF', '#722ED1', '#13C2C2', '#FAAD14']
        }
      };
      
      // 获取canvas元素
      const ctx = document.getElementById('issuePieChart').getContext('2d');
      
      // 如果已有图表实例，先销毁
      if (window.issueChart) {
        window.issueChart.destroy();
      }
      
      // 创建新图表
      window.issueChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: issueData[period].labels,
          datasets: [{
            data: issueData[period].data,
            backgroundColor: issueData[period].colors,
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                boxWidth: 12,
                padding: 20
              }
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = Math.round((value / total) * 100);
                  return `${label}: ${value} (${percentage}%)`;
                }
              }
            }
          }
        }
      });
      
      showToast('问题数据已更新', 'success');
    }, 1000);
  }

  // 更新画像数据
  function updateProfileData(period) {
    // 这里应该是实际的API调用，我们只是模拟
    showToast(`正在加载最近${period}天的消费者画像数据...`, 'info');
    
    setTimeout(() => {
      // 模拟数据更新
      const genderImg = document.querySelector('#gender-tab img');
      const ageImg = document.querySelector('#age-tab img');
      
      genderImg.src = `https://placeholder.pics/svg/600x300/F5F7FA/1890FF/消费者性别比例图-${period}天`;
      ageImg.src = `https://placeholder.pics/svg/600x300/F5F7FA/722ED1/消费者年龄分布图-${period}天`;
      
      showToast('消费者画像数据已更新', 'success');
    }, 1000);
  }

  // 初始化页面
  function initPage() {
    // 默认加载30天数据
    updateWordFrequencyData('30');
    updateIssueData('30');
    updateProfileData('30');
    initRegionMap();
    
    // 绑定所有采纳和修改按钮事件
    document.querySelectorAll('.btn-accept').forEach(btn => {
      btn.addEventListener('click', function() {
        const suggestionItem = this.closest('.suggestion-item');
        showToast(`已采纳建议: ${suggestionItem.querySelector('h3').textContent}`, 'success');
      });
    });
    
    document.querySelectorAll('.btn-modify').forEach(btn => {
      btn.addEventListener('click', function() {
        const suggestionItem = this.closest('.suggestion-item');
        showToast(`已修改建议: ${suggestionItem.querySelector('h3').textContent}`, 'success');
      });
    });
    
    // 绑定导出和实施按钮事件
    document.querySelector('.btn-export')?.addEventListener('click', exportStrategy);
    document.querySelector('.btn-implement')?.addEventListener('click', implementStrategy);
  }

  // 启动初始化
  initPage();
  bindExecutionButtons();
});