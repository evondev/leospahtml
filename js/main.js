const menuOpen = document.querySelector(".menu__collapse");
const menuClose = document.querySelector(".menu__close");
const headerMenu = document.querySelector(".header .menu");

menuOpen.addEventListener("click", function() {
  headerMenu.classList.add("is-open");
});

menuClose.addEventListener("click", function() {
  headerMenu.classList.remove("is-open");
});

document.addEventListener("click", function(event) {
  if (
    !headerMenu.contains(event.target) &&
    !event.target.matches(".menu__collapse")
  ) {
    headerMenu.classList.remove("is-open");
  }
});
