// setup.js
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
      
      // 设置推荐话术和流程默认内容
      const recommendedScript = document.getElementById("recommended-script");
      if (recommendedScript) {
        recommendedScript.value = `标准欢迎语\n您好！这里是xx店铺的Colin。请问有什么可以帮您？\n\n常见问题解答\n1. 关于商品质量：我们的商品都经过严格质检，您放心。让我们来了解下，您是在哪里遇到了困难。\n\n2. 关于物流：通常下单后48小时内发货，平台订单可在对应APP查询物流。\n\n3. 关于售后：如有任何不满意，请联系我们，我们将竭诚为您服务。`;
      }
      
      const processFlow = document.getElementById("process-flow");
      if (processFlow) {
        processFlow.value = `标准处理流程\n1.确认客户身份和订单信息\n2.了解具体问题并分类（质量/物流/使用等）\n3.根据问题类型提供解决方案：\n3.1 质量问题：换货或退款\n3.2 物流问题：补发或部分退款\n3.3 使用问题：提供指导或视频教程\n4.已解决问题，记录处理结果并跟进客户满意度\n5.未解决问题，记录客户意见并约定下次沟通时间，并将客户案件转发给人工处理`;
      }
    });
  
  // 子品类数据
  const subcategories = {
    electronics: ["手机", "电脑", "相机", "耳机", "智能家居"],
    clothing: ["男装", "女装", "童装", "运动服", "内衣"],
    home: ["家具", "家纺", "厨具", "装饰", "灯具"],
    beauty: ["护肤品", "化妆品", "香水", "美发", "个人护理"],
    food: ["零食", "饮料", "生鲜", "粮油", "保健品"]
  };
  
  // 获取DOM元素
  const categorySelect = document.getElementById('category');
  const subcategorySelect = document.getElementById('subcategory');
  const subcategoryWrapper = document.getElementById('subcategory-wrapper');
  const codeTypeRadios = document.querySelectorAll('input[name="code-type"]');
  const productCodeInput = document.getElementById('product-code');
  
  // 步骤导航功能
  const nextButtons = document.querySelectorAll(".btn-next");
  const prevButtons = document.querySelectorAll(".btn-prev");
  const formSections = document.querySelectorAll(".form-section");
  const steps = document.querySelectorAll(".step");
  
  // 下一步按钮点击事件
  nextButtons.forEach(button => {
    button.addEventListener("click", function() {
      const nextSectionId = this.getAttribute("data-next");
      const currentSection = this.closest(".form-section");
      
      // 验证当前表单部分
      if (validateSection(currentSection.id)) {
        // 切换活动部分
        currentSection.classList.remove("active");
        document.getElementById(nextSectionId).classList.add("active");
        
        // 更新步骤指示器
        updateStepIndicator(nextSectionId);
      }
    });
  });
  
  // 上一步按钮点击事件
  prevButtons.forEach(button => {
    button.addEventListener("click", function() {
      const prevSectionId = this.getAttribute("data-prev");
      const currentSection = this.closest(".form-section");
      
      // 切换活动部分
      currentSection.classList.remove("active");
      document.getElementById(prevSectionId).classList.add("active");
      
      // 更新步骤指示器
      updateStepIndicator(prevSectionId);
    });
  });
  
  // 表单验证函数
  function validateSection(sectionId) {
    const section = document.getElementById(sectionId);
    const inputs = section.querySelectorAll("input[required], select[required]");
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "var(--error-color)";
        isValid = false;
        
        // 添加错误提示
        if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error-message")) {
          const errorMessage = document.createElement("div");
          errorMessage.className = "error-message";
          errorMessage.textContent = "此字段为必填项";
          errorMessage.style.color = "var(--error-color)";
          errorMessage.style.fontSize = "0.875rem";
          errorMessage.style.marginTop = "0.25rem";
          input.parentNode.insertBefore(errorMessage, input.nextSibling);
        }
      } else {
        input.style.borderColor = "var(--border-color)";
        
        // 移除错误提示
        if (input.nextElementSibling && input.nextElementSibling.classList.contains("error-message")) {
          input.nextElementSibling.remove();
        }
      }
    });
    
    return isValid;
  }
  
  // 更新步骤指示器
  // 品类选择变化事件
  categorySelect.addEventListener("change", function() {
    subcategorySelect.innerHTML = "<option value=''>请选择商品子品类</option>";
    
    if (this.value) {
      subcategoryWrapper.style.display = "block";
      
      // 填充子品类选项
      subcategories[this.value].forEach(sub => {
        const option = document.createElement("option");
        option.value = sub;
        option.textContent = sub;
        subcategorySelect.appendChild(option);
      });
    } else {
      subcategoryWrapper.style.display = "none";
    }
  });
  
  // 编码类型变化事件
  codeTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.value === '69') {
        productCodeInput.placeholder = '请输入69码';
        productCodeInput.pattern = '^[0-9]{12,13}$';
        productCodeInput.title = '请输入12或13位数字的69码';
      } else {
        productCodeInput.placeholder = '请输入ASIN码';
        productCodeInput.pattern = '^[A-Z0-9]{10}$';
        productCodeInput.title = '请输入10位字母数字组合的ASIN码';
      }
    });
  });
  
  function updateStepIndicator(sectionId) {
    let activeStepIndex;
    
    switch (sectionId) {
      case "store-section":
        activeStepIndex = 0;
        break;
      case "phone-section":
        activeStepIndex = 1;
        break;
      case "category-section":
        activeStepIndex = 2;
        break;
      case "preview-section":
        activeStepIndex = 3;
        break;
      case "upload-section":
        activeStepIndex = 4;
        break;
    }
    
    steps.forEach((step, index) => {
      if (index <= activeStepIndex) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }
  
  // 文件上传处理
  const fileInputs = document.querySelectorAll(".file-input");
  
  fileInputs.forEach(input => {
    input.addEventListener("change", function() {
      const fileInfo = this.nextElementSibling.nextElementSibling;
      
      if (this.files && this.files.length > 0) {
        if (this.multiple) {
          fileInfo.textContent = `已选择 ${this.files.length} 个文件`;
        } else {
          fileInfo.textContent = this.files[0].name;
        }
      } else {
        fileInfo.textContent = "未选择文件";
      }
    });
  });
  
  // 表单提交
  const form = document.querySelector(".setup-form");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // 验证最后一个部分
    if (validateSection("upload-section")) {
      // 模拟表单提交
      const submitBtn = document.querySelector(".btn-submit");
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = "处理中...";
      
      setTimeout(() => {
        // 跳转到指定URL
        window.location.href = "https://static.pm-ai.cn/projectproto/20251104/proj4b81f1d5be82/dashboard.html?_t=1762346235741";
      }, 1500);
    }
  });
  
  // 输入框实时验证
  const requiredInputs = document.querySelectorAll("input[required], select[required]");
  
  requiredInputs.forEach(input => {
    input.addEventListener("input", function() {
      if (this.value.trim()) {
        this.style.borderColor = "var(--border-color)";
        
        // 移除错误提示
        if (this.nextElementSibling && this.nextElementSibling.classList.contains("error-message")) {
          this.nextElementSibling.remove();
        }
      }
    });
  });
});