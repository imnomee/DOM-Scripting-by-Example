const form = document.querySelector('form');
const submitButton = form.querySelector('[type=Submit]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
});

/////////////////////////
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
  const colorSquare = document.getElementById('colorDiv');

redButton.addEventListener('click', (e) => {

  colorSquare.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', (e) => {
  colorSquare.style.backgroundColor = 'blue';
})

/////////////////////////////////
const laws = document.getElementsByTagName('li');
const indexText = document.getElementById('boldIndex');
const button = document.getElementById('embolden');

button.addEventListener('click', (e) => {
    //parse int rounding to floor. i.e 2.9 is 2
    const index = parseInt(indexText.value, 10);
  
    for (let i = 0; i < laws.length; i += 1) {
       let law = laws[i];
  
       // replace 'false' with a correct test condition on the line below
       if (i == index) {
  
           law.style.fontWeight = 'bold';
       } else {
           law.style.fontWeight = 'normal';
       }
    }
});