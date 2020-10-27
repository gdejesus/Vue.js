const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoald() {
    const enteredValue = inputEl.value;
    const listItemEL = document.createElement('li');
    listItemEL.textContent = enteredValue;
    listEl.appendChild(listItemEL);
    inputEl.value = '';
}
buttonEl.addEventListener('click', addGoald);