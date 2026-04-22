// 联系页面交互功能

document.addEventListener('DOMContentLoaded', function() {
  // FAQ 展开/收起功能
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // 关闭其他已打开的FAQ项
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // 切换当前FAQ项
      item.classList.toggle('active');
    });
  });

  // 联系表单提交处理
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 获取表单数据
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // 构建邮件链接
      const mailtoLink = `mailto:support@vocseek.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`姓名: ${name}\n邮箱: ${email}\n\n${message}`)}`;
      
      // 打开邮件客户端
      window.location.href = mailtoLink;
      
      // 显示成功消息（可选）
      alert('正在打开您的邮件客户端，请发送邮件联系我们。');
      
      // 重置表单
      contactForm.reset();
    });
  }
});

