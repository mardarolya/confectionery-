var OpenSmallMenu = document.querySelector(".small-nav");
var CloseSmallMenu = document.querySelector(".smal-nav-back");
var SmallMenu = document.querySelector(".small-navigation");

OpenSmallMenu.addEventListener("click", function(event) {
  event.preventDefault();
  SmallMenu.classList.add("show-menu");
  });

CloseSmallMenu.addEventListener("click", function(event) {
  event.preventDefault();
  SmallMenu.classList.remove("show-menu");
  });
