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

  // 随机生成雪花的横向位置
  const randomLeft = Math.random();  // 随机生成一个0到1之间的值，表示水平位置
  snowflake.style.setProperty('--random-left', randomLeft);

  // 随机生成雪花的大小
  const size = Math.random() * 10 + 5;  // 雪花大小随机，范围从5px到15px
  snowflake.style.width = size + 'px';
  snowflake.style.height = size + 'px';  // 保持雪花为圆形

  // 随机生成雪花的下落速度
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';  // 速度在5-10秒之间

  // 将雪花元素添加到页面
  document.body.appendChild(snowflake);

  // 移除雪花，防止页面中积累过多的元素
  setTimeout(() => {
    snowflake.remove();
  }, 10000);  // 雪花10秒后消失
}

// 每100毫秒生成一个雪花
setInterval(createSnow, 1000);

