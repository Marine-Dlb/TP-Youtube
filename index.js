const checkbox = document.querySelector("#customSwitch1")
const body = documetn.querySelector("body")

const titres = document.querySelectorAll("h3")
const iframes = document.querySelectorAll("iframe")
const hrs = document.querySelectorAll("hr")
const checkboxLabel = document.querySelector(".custom-control-input")
const navbar = document.querySelectorAll("nav")
const logoText = document.querySelectorAll("a")

checkbox.addEventListener('clcik', function(){
  body.classList.toggle("darkmode")
})