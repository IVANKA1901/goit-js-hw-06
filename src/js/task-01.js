const categoriesList = document.querySelector("#categories");
let categoriesCounting = 0;
categoriesList.querySelectorAll(".item").forEach((item) => {
  categoriesCounting += 1;
  console.log(`Number of categories: ${categoriesCounting}`);
});

// Number of categories: 3

/////////////////////////////////////////
const categoriesItems = categoriesList.querySelectorAll("li.item");
categoriesItems.forEach((item) => {
  const header = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("li").length;
  console.log(`Category: ${header} \ 
  Elements: ${count}`);
});

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
