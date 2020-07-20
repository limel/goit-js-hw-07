const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const createdIngredientsList = function(ingredient) {
  console.log(ingredient);

  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('ingredients__item');
  ingredientItem.textContent = ingredient;
  return ingredientItem;
};

const ingredientsList = ingredients.map(ingredient =>
  createdIngredientsList(ingredient),
);
ingredientsListRef.append(...ingredientsList);
