var elBody = document.querySelector("body");
var elBtn = document.querySelector(".dark-btn");

elBtn.addEventListener("click" , function(){
  elBody.classList.toggle("dark");
});