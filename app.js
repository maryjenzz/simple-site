const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  if(document.body.classList.contains('dark-theme')) {
    btn.textContent = 'Light';
  } else {
    btn.textContent = 'Dark';
  }
});
