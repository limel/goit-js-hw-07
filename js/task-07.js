const controlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function onChangeFontSize() {
  const fontSize = controlRef.value;
  console.log(`размер шрифта: ${fontSize} px`);
  textRef.setAttribute('style', `font-size: ${fontSize}px`);
}

controlRef.addEventListener('input', onChangeFontSize);
