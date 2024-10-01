// Hamburger Menu
const menu = document.querySelector(".header-mobile-menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".header-mobile-hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
    }
)

// Products Carousel
let productName = document.getElementById("productName");
let productImage = document.getElementById("productImage");
let next = document.getElementById("next");
let previous = document.getElementById("previous");

let products = [
    {
        "name" : "Multicolored round",
        "image" : "round.png",
    },
    {
        "name" : "Multicolored square",
        "image" : "square.png",
    },
    {
        "name" : "Among Us, marbled",
        "image" : "amongus.png",
    }
];

let num = 0;
productImage.innerHTML = `<img class="products-smartphone-image" src="./images/${products[num].image}">` 
productName.innerHTML = products[num].name;


next.addEventListener("click", ()=> {
    if (num == 0 || num == 1 ) {
        num = num + 1;
    }
    productImage.innerHTML = `<img class="products-smartphone-image" src="./images/${products[num].image}">` 
    productName.innerHTML = products[num].name
});

previous.addEventListener("click", ()=> {
    if (num == 2 || num == 1 ) {
        num = num - 1;
    }
    productImage.innerHTML = `<img class="products-smartphone-image" src="./images/${products[num].image}">` 
    productName.innerHTML = products[num].name;
});

