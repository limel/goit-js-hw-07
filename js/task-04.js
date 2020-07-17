const valueCounterRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);

let counterValue = 0;

function handleIncrementCounter() {
  counterValue += 1;
  valueCounterRef.textContent = counterValue;
}

function handleDecrementCounter() {
  counterValue -= 1;
  valueCounterRef.textContent = counterValue;
}

incrementBtnRef.addEventListener('click', handleIncrementCounter);
decrementBtnRef.addEventListener('click', handleDecrementCounter);
