document.addEventListener('mousemove', function(e) {
  const trail = document.createElement('div');
  trail.className = 'trail';

  // 确保为每个 trail 设置一个随机颜色
  const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // 随机颜色
  trail.style.backgroundColor = randomColor;

  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';
  
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 500);
});

