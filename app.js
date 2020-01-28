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
    //creating checkbox input with label
    const label = document.createElement('label');
    label.textContent = 'Confirmed ';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    //added checkbox the list item
    label.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
});

ul.addEventListener('change', (e)=>{
    // check if the e.target checkbox is checked or not. true or false
    console.log(e.target.checked);
    const checkbox = e.target;
    const checked  = checkbox.checked;

    //getting grandparent of checkbox
    const parentList = checkbox.parentNode.parentNode;
    if (checked){
        parentList.className = 'responded';
    } else { parentList.className = '';}
    


});