const form = document.getElementById('registrar');
const input = form.querySelector('input');

const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't responded: ";
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);

mainDiv.insertBefore(div, ul);

filterCheckbox.addEventListener('change', (e) => {
    const checked = e.target.checked;
    const lis = ul.children;
    if (checked) {
        for (let i = 0; i < lis.length; i++) {
            let li = lis[i];
            if (li.className == 'responded') {
                li.style.display = '';

            } else {
                li.style.display = 'none';
            }
        }
    } else {
        console.log('unchecked');
        for (let i = 0; i < lis.length; i++) {
            const li = lis[i];
            li.style.display = '';
        }

    }

})


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
    // if (e.target.tagName == 'BUTTON') {
    //     const li = e.target.parentNode;
    //     const ul = li.parentNode;
    //     ul.removeChild(li);
    // }

    //ONE APPROACH
    // if (e.target.className == 'removeB') {
    //     const li = e.target.parentNode;
    //     const ul = li.parentNode;
    //     ul.removeChild(li);
    // }

    // SECOND APPROACH
    if (e.target.tagName == 'BUTTON') {
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;


        if (button.textContent == 'Remove') {

            ul.removeChild(li);
        } else if (button.textContent == 'Edit') {
            console.log('edit');
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = 'Save';
        } else if (button.textContent == 'Save') {
            console.log('Save');
            const input = li.firstElementChild;
            const span = document.createElement('span');
            li.insertBefore(span, input);
            span.textContent = input.value;
            li.removeChild(input);
            button.textContent = 'Edit';
        }

    }

});

function addLi(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);
    //creating checkbox input with label
    const label = document.createElement('label');
    label.textContent = 'Confirmed ';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    //creating edit button
    const editButton = document.createElement('button');
    // editButton.className = 'editB'
    editButton.textContent = 'Edit';

    //creating remove button
    const removeButton = document.createElement('button');
    // removeButton.className = 'removeB';
    removeButton.textContent = 'Remove';
    //added button to list item


    //added checkbox the label item
    label.appendChild(checkbox);
    //added label to the list item
    li.appendChild(label);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    return li;
}