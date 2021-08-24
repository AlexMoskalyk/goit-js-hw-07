


const allCategories = document.querySelector('#categories');
const allItems = allCategories.querySelectorAll('.item');

console.log(`В списке ${allItems.length} категории.`);

allItems.forEach((li) => {
    const ItemH2 = li.querySelector('h2');
    const ItemLi = li.querySelectorAll('li');
      
    
    console.log(`Категория: ${ItemH2.textContent}`);
    console.log(`Количество : ${ItemLi.length}`);
});

// const list = document.querySelector('#categories')
// console.log(list);
// const firstLi = list.querySelectorAll('.item')
// console.log(firstLi);


// //работает
// // const secondUl = list.querySelectorAll('ul')
// // console.log(secondUl);

// //не работает 
// const secondUl = firstLi.querySelectorAll('ul')
// console.log(secondUl);