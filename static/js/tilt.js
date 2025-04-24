/* 轻量 Vanilla JS，无第三方依赖 */
(function () {
    // 允许在触控屏上禁用该效果
    if (matchMedia('(hover: none)').matches) return;
  
    const MAX_TILT = 10;      // 最大倾斜角度（度）
    const SCALE     = 1.05;   // 鼠标悬停时图片的轻微缩放
  
    document.querySelectorAll('.tilt-img').forEach(img => {
      const parent = img.parentElement;           // method-image-container
      let w, h, rect;                             // 用于缓存尺寸
  
      // —— 鼠标进入时记录当前尺寸 —— //
      parent.addEventListener('mouseenter', () => {
        rect = parent.getBoundingClientRect();
        w = rect.width;
        h = rect.height;
        img.style.transition = 'transform 0.1s ease-out';
      });
  
      // —— 悬停移动：按位置计算旋转 —— //
      parent.addEventListener('mousemove', e => {
        const x = e.clientX - rect.left;          // 相对容器左上角
        const y = e.clientY - rect.top;
        const rotY = ((x - w / 2) / (w / 2)) * MAX_TILT;
        const rotX = -((y - h / 2) / (h / 2)) * MAX_TILT;
        img.style.transform =
          `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;
      });
  
      // —— 离开时复位 —— //
      parent.addEventListener('mouseleave', () => {
        img.style.transition = 'transform 0.3s ease-out';
        img.style.transform  = 'none';
      });
    });
  })();
  