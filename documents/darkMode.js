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

// Toggle avec animation split-vertical
async function toggleTheme() {
  const duration = 400;
  
  // Vérifier si l'API View Transition est supportée
  if (!document.startViewTransition) {
    // Fallback sans animation
    isDark = !isDark;
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateToggleButton();
    return;
  }

  // Utiliser View Transition API
  await document.startViewTransition(() => {
    isDark = !isDark;
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateToggleButton();
  }).ready;

  // Animation split-vertical
  document.documentElement.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    {
      duration: duration * 0.75,
      easing: "ease-in",
      pseudoElement: "::view-transition-new(root)",
    }
  );
  
  document.documentElement.animate(
    [
      { clipPath: 'inset(0 0 0 0)', transform: 'none' },
      { clipPath: 'inset(0 40% 0 40%)', transform: 'scale(1.2)' },
      { clipPath: 'inset(0 50% 0 50%)', transform: 'scale(1)' },
    ],
    {
      duration: duration * 1.5,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      pseudoElement: "::view-transition-old(root)",
    }
  );
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