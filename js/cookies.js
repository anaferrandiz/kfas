'use strict'

// script.js
window.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const accepted = localStorage.getItem("cookies-accepted");

  if (!accepted) {
    banner.style.display = "block";
  }

  document.getElementById("accept-cookies").addEventListener("click", () => {
    localStorage.setItem("cookies-accepted", "true");
    banner.style.display = "none";
  });
});


