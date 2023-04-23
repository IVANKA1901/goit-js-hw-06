// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
// console.log(button, descr);

button.addEventListener("click", onButtonHandle);

function onButtonHandle(event) {
  const body = document.querySelector("body");
  // console.log(body);
  const newBackColor = getRandomHexColor();
  body.style.backgroundColor = newBackColor;
  // console.log(body);
  span.textContent = newBackColor;
}
