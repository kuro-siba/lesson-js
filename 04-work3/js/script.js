const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

// isAgreed.addEventListener('change', () => {
  // if (isAgreed.checked) {
    // btn.disabled = false;
  // } else {
    // btn.disabled = true;
  // }
// });

isAgreed.addEventListener('change', () => {
  btn.disabled = !isAgreed.Checked;
});
