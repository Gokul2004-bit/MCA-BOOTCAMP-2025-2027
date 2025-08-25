const btn = document.getElementById('contactBtn');
const modal = document.getElementById('contactModal');
const closeEl = document.querySelector('.close');

btn.addEventListener('click', () => modal.style.display = 'block');
closeEl.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});
