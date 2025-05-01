document.addEventListener('mousemove', function (e) {
  const trail = document.createElement('div');
  trail.className = 'trail';

  // 获取页面背景色
  const bgColor = getComputedStyle(document.body).backgroundColor;
  
  // 判断背景色是否为浅色（亮色）
  if (isLightColor(bgColor)) {
    // 如果是浅色背景，使用深色的鼠标效果（例如蓝色）
    trail.style.backgroundColor = 'rgba(0, 0, 255, 0.8)';
  } else {
    // 如果是深色背景，使用浅色鼠标效果（例如红色）
    trail.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
  }

  // 设置鼠标轨迹的位置
  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';

  // 将鼠标效果添加到页面中
  document.body.appendChild(trail);

  // 设定效果消失的时间，这里设置为500ms
  setTimeout(() => {
    trail.remove();
  }, 500);
});

// 判断颜色是否为浅色背景
function isLightColor(color) {
  const rgb = color.match(/\d+/g); // 提取 RGB 数值
  const brightness = Math.sqrt(
    0.299 * (rgb[0] ** 2) + 0.587 * (rgb[1] ** 2) + 0.114 * (rgb[2] ** 2)
  );
  return brightness > 127; // 如果亮度大于 127，则认为是浅色
}

