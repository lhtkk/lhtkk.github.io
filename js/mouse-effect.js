document.addEventListener('mousemove', function(e) {
  const trail = document.createElement('div');
  trail.className = 'trail';
  
  // 设置渐变色
  trail.style.background = 'linear-gradient(to right, #ff007f, #7f00ff)';
  
  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';
  
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 500);
});

