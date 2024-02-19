const btnClubSandwich = document.getElementById("btn-club-sandwich");
const totalPrice = document.getElementById("total-price");
const counter01 = document.getElementById("counter-card-01");

const totalCS = document.getElementById("cs-price");
const totalGrilled = document.getElementById("grilled-price");
const totalburguer = document.getElementById("burguer-price");

const priceClubSandwich = 9.99;
const priceGrilledCheese = 12.99;
const priceBurguer = 14.99;
let total = 0;

btnClubSandwich.addEventListener("click", function () {
  totalPrice.innerHTML = "$" + total;
});

counter01.addEventListener("change", function () {
  if (counter01.value >= 0) {
    total = counter01.value * priceClubSandwich;
    totalCS.innerHTML = "$" + total;
  }
});

//hacer que el counter si es 1 sea 20*1 y asi hasta n
