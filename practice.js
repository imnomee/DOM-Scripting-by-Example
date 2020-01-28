const form = document.querySelector('form');
const submitButton = form.querySelector('[type=Submit]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
});

const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
  const colorSquare = document.getElementById('colorDiv');

redButton.addEventListener('click', (e) => {

  colorSquare.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', (e) => {
  colorSquare.style.backgroundColor = 'blue';
})