'use strict'

// Verificar si el usuario ya aceptó cookies
const banner = document.getElementById("cookie-banner");
const accepted = localStorage.getItem("cookies-accepted");

if (!accepted) {
  banner.style.display = "block";
}

// Al hacer clic en "Aceptar"
document.getElementById("accept-cookies").addEventListener("click", () => {
  localStorage.setItem("cookies-accepted", "true");
  banner.style.display = "none";
});
