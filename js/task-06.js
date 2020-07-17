// Напиши скрипт, который бы при потере фокуса на
// инпуте, проверял его содержимое на правильное
// количество символов.

// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data-length.
// Если введено подходящее количество,
//  то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей,
// используй CSS-классы valid и invalid.

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
