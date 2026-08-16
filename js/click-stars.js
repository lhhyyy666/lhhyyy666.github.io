// 点击出现星星/月亮特效（鼠标处上飘、旋转、渐隐）
(() => {
  const GLYPHS = ['✦', '★', '☆', '✧', '🌙', '✨']
  const COLORS = ['#49b1f5', '#2f80ed', '#7b68ee', '#ffd66b', '#00c4b6']
  const isDesktop = window.matchMedia && window.matchMedia('(pointer: fine)').matches

  document.addEventListener('click', e => {
    if (!isDesktop) return
    const span = document.createElement('span')
    span.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0]
    span.style.cssText = [
      'position:fixed',
      'left:' + e.clientX + 'px',
      'top:' + e.clientY + 'px',
      'font-size:' + (14 + Math.random() * 18) + 'px',
      'color:' + COLORS[(Math.random() * COLORS.length) | 0],
      'pointer-events:none',
      'z-index:99999',
      'transform:translate(-50%, -50%)',
      'transition:all .9s ease-out',
      'opacity:1',
      'user-select:none'
    ].join(';')
    document.body.appendChild(span)
    const dx = (Math.random() - 0.5) * 70
    const dy = -(40 + Math.random() * 60)
    const rot = (Math.random() * 120 - 60).toFixed(0)
    requestAnimationFrame(() => {
      span.style.transform = 'translate(calc(-50% + ' + dx + 'px), calc(-50% + ' + dy + 'px)) rotate(' + rot + 'deg)'
      span.style.opacity = '0'
    })
    setTimeout(() => span.remove(), 950)
  })
})()
