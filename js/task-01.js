// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
let countCategories = 0;
categoriesItems.forEach((item) => {
  const header = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("li").length;
  console.log(countCategories);
  console.log(`Category: ${header} \ 
  Elements: ${count}`);
});

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
