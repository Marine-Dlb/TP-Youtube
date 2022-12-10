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

let input = document.getElementById("text.localStorage");
function text(){
  let value = document.getElementById("text.localStorage").value;
  window.localStorage.setItem("iframe" + (new Date()), value);
  window.location.reload()
};

// 1. Enregistrer une video youtube dans le localStorage //
function save() {
  let iframe = document.getElementById("iframeCode").value
  window.localStorage.setItem("iframe" + (+new Date()), iframe);
  window.location.reload()
};

// 2. Chargement des vidéos déjà enregistrées //
window.onload = function load() {
  // Transformer le LocalStorage en objet clé:valeur que l'on peut lire facilement
  let iframes = {...localStorage};

  let html = "";

  // Transformer les iframes en tableau, en faire une seule chaine de caractère géante, 
  // puis ajouter le bouton de suppression après chaque iframe avec un attribut contenant la clé
  for([key, iframe] of Object.entries(iframes)) {
      html += iframe + `<button class="delete" style="position:relative;left:-30px;top:-10px" data-key="${key}">X</button>`
  }

  // Ajouter le code HTML généré dans le div vide
  document.querySelector('.video-play').innerHTML = html; 

  // Enregistrer l'événement de suppression de vidéo
  document.querySelectorAll('button.delete').forEach((button) => {

      // Au clic sur le bouton de suppression
      button.addEventListener("click", () => {
          // Suppression effective de l'iframe dans le localStorage
          window.localStorage.removeItem(button.dataset.key);
          // Recharger la page pour voir les changements
          window.location.reload();
      })

  })
}
