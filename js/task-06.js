const inputRef = document.querySelector('#validation-input');
const inputDataRef = Number(inputRef.dataset.length);

function onChangeBorder(event) {
  const inputValueLength = event.target.value.length;

  inputRef.setAttribute('class', 'valid');
  if (inputValueLength < inputDataRef) {
    inputRef.setAttribute('class', 'invalid');
  }

  // return inputValueLength >= inputDataRef
  //   ? inputRef.setAttribute('class', 'valid')
  //   : inputRef.setAttribute('class', 'invalid');
}

inputRef.addEventListener('blur', onChangeBorder);
