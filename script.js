let menu = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let tf;

menu.addEventListener("click", () => {
  navlist.classList.toggle("open");
  if (tf == false) {
    menu.classList.remove("active");
    navlist.classList.remove("active");
    tf = true;
  } else {
    menu.classList.add("active");
    navlist.classList.add("active");
    tf = false;
    console.log("nee");
  }
});
