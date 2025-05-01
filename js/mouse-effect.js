// 鼠标烟花效果
document.addEventListener('mousemove', function(e) {
  for (let i = 0; i < 5; i++) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    
    // 随机颜色
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    trail.style.backgroundColor = randomColor;

    // 设置位置
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';

    // 追加到页面中
    document.body.appendChild(trail);

    // 设置延迟删除
    setTimeout(() => {
      trail.remove();
    }, 500);  // 500毫秒后删除
  }
});

// 背景下雪效果
function createSnow() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snow';
  
  // 随机生成雪花的位置和动画速度
  snowflake.style.left = Math.random() * 100 + 'vw';  // 横向随机位置
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // 随机下落速度

  // 添加到页面中
  document.body.appendChild(snowflake);

  // 设置雪花在一定时间后移除
  setTimeout(() => {
    snowflake.remove();
  }, 10000);  // 雪花会在10秒后被移除
}

// 每隔一段时间生成雪花
setInterval(createSnow, 100);  // 每100毫秒生成一个雪花

