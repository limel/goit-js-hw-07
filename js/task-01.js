const categoriesRef = document.querySelector('#categories');
console.dir(categoriesRef);

const itemsRef = document.querySelectorAll('.item');
console.dir(itemsRef);

console.log(`в списке ${itemsRef.length} категории`);

itemsRef.forEach(item =>
  console.log(`
  -категория : ${item.firstElementChild.textContent}
  -количетсво элементов: ${item.querySelectorAll('li').length}`),
);
