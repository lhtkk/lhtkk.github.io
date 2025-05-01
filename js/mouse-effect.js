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
// 背景下雪效果
function createSnow() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snow';

  // 随机生成雪花的位置（水平位置）
  const randomLeft = Math.random(); // 随机生成 0-1 的值，表示横向位置
  snowflake.style.setProperty('--random-left', randomLeft);

  // 随机生成雪花的动画速度（下落时间）
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // 下落速度：5-10秒

  // 随机生成雪花的大小
  snowflake.style.width = Math.random() * 10 + 5 + 'px';  // 雪花宽度 5-15px
  snowflake.style.height = snowflake.style.width;  // 保持雪花是圆形

  // 将雪花添加到页面
  document.body.appendChild(snowflake);

  // 设置雪花在一定时间后移除
  setTimeout(() => {
    snowflake.remove();
  }, 10000);  // 雪花会在10秒后消失
}

// 每隔一段时间生成雪花
setInterval(createSnow, 100);  // 每100毫秒生成一个雪花
