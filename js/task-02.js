const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const titleEl = document.createElement('li');
  titleEl.textContent = ingredient;
  titleEl.classList.add('item');
  list.append(titleEl);
});


