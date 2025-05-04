
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
setInterval(createSnow, 700);

