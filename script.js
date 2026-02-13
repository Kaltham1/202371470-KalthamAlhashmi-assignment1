const toggleBtn = document.getElementById('toggle-btn');
const moreText = document.getElementById('read-more');

toggleBtn.addEventListener('click', () => {
  moreText.classList.toggle('hidden');

  if (moreText.classList.contains('hidden')) {
    toggleBtn.textContent = 'Read More';
  } else {
    toggleBtn.textContent = 'Read Less';
  }
});
