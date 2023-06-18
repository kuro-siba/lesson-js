const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('click',() => {
  // console.log("1")
  count.textContent = text.Value.length;
});