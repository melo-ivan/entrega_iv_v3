
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.querySelector('.tema-btn');
  const contrastBtn = document.querySelector('.contraste-btn');

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });
});
