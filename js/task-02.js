const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const createElementLi = (ingredients) => {
  return ingredients.map((ingredient) => {
    const titleEl = document.createElement('li');
    titleEl.textContent = ingredient;
    titleEl.classList.add('item');
    return titleEl;
  });
};

list.append(...createElementLi);
