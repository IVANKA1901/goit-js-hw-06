// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");

const onDecrementButtonClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const onIncrementButtonClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

buttonDecrement.addEventListener("click", onDecrementButtonClick);
buttonIncrement.addEventListener("click", onIncrementButtonClick);
