const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

function onInputName(event) {
  const name = event.target.value;
  nameOutputRef.textContent = name || 'незнакомец';
}

nameInputRef.addEventListener('input', onInputName);
