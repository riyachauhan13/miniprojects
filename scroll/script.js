let circle = document.querySelector(".circle");
let container = document.querySelector(".container");

let mode = "light"
function switchMode() {
  if (mode === "light") {
    circle.style.left = "70px";
    container.style.backgroundColor = "pink";
    mode = "dark";
    document.body.style.cssText = "background-color:black;color:white;"
  } else {
    circle.style.left = "4px";
    container.style.backgroundColor = "cadetblue";
    mode="light"
    document.body.style.cssText = "background-color:white;color:black;"
  }
}