const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


form.addEventListener('submit', (e)=>{
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    e.preventDefault();
    
    const text = input.value;
    input.value = '';
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);





});