const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


form.addEventListener('submit', (e) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    e.preventDefault();

    const text = input.value;
    input.value = '';

    // if text is not empty value run function with it
    if (text != '') {
        const li = addLi(text)
        ul.appendChild(li);
    };
});

ul.addEventListener('change', (e) => {
    // check if the e.target checkbox is checked or not. true or false
    console.log(e.target.checked);
    const checkbox = e.target;
    const checked = checkbox.checked;

    //getting grandparent of checkbox
    const parentList = checkbox.parentNode.parentNode;
    if (checked) {
        parentList.className = 'responded';
    } else { parentList.className = ''; }

});

ul.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);


    }

});

function addLi(text) {
    const li = document.createElement('li');
    li.textContent = text;
    //creating checkbox input with label
    const label = document.createElement('label');
    label.textContent = 'Confirmed ';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    //creating remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    //added button to list item


    //added checkbox the label item
    label.appendChild(checkbox);
    //added label to the list item
    li.appendChild(label);
    li.appendChild(removeButton);
    return li;
}