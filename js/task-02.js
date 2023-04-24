// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");
// console.log(listIngredients);

const itemIngredients = ingredients.map((ingredient) => {
  const itemIngredient = document.createElement("li");
  itemIngredient.textContent = ingredient;
  itemIngredient.classList.add("item");
  return itemIngredient;
});

listIngredients.append(...itemIngredients);
