const checkbox = document.querySelector("#customSwitch1");
const body = document.querySelector("body");

const titres = document.querySelectorAll("h3");
const iframes = document.querySelectorAll("iframe");
const hrs = document.querySelectorAll("hr");
const checkboxLabel = document.querySelector(".custom-control-input");
const navbar = document.querySelector("nav");
const logoText = document.querySelector("a");

checkbox.addEventListener('click', function(){
  body.classList.toggle("darkmode");
  checkboxLabel.classList.toggle("darkmode");
  navbar.classList.toggle("darkmode");
  logoText.classList.toggle("darkmode");
  titres.forEach(titre=>{
    titre.classList.toggle("darkmode");
})
hrs.forEach(hr=>{
  hr.classList.toggle("darkmode");
})
});
