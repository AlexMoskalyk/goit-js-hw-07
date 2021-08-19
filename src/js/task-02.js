const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')

const allLi = ingredients.map(item => {
  const li = document.createElement('li')
  li.textContent = item;
 return li
})

list.append(...allLi);