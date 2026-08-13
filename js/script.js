document.querySelectorAll('.post-entry').forEach(entry => {
  const body = entry.querySelector('.post-body');
  const btn = entry.querySelector('.read-more-btn');

  if (body.scrollHeight > body.clientHeight + 2) {
    btn.style.display = 'inline-block';
  }

  btn.addEventListener('click', () => {
    body.classList.toggle('clamped');
    btn.textContent = body.classList.contains('clamped') ? 'read more' : 'show less';
  });
});