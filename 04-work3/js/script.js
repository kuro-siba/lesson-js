const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
  if (isAgreed.checked) {
    btn.disable = false;
  } else {
    btn.disable = true;
  }
});