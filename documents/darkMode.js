"use strict";

let isDark = false;

// Initialiser le thème au chargement
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  isDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  if (isDark) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  
  updateToggleButton();
}

// Mettre à jour l'apparence du bouton
function updateToggleButton() {
  const toggle = document.getElementById("darkModeToggle");
  if (toggle) {
    toggle.checked = isDark;
  }
}

// Toggle sans animation
function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateToggleButton();
}

// Initialiser au chargement de la page
initTheme();

// Écouter les changements du toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  if (toggle) {
    toggle.addEventListener("change", toggleTheme);
  }
});