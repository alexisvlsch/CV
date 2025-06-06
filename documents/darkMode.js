
document.addEventListener('DOMContentLoaded', () => {
const darkModeToggle = document.getElementById('darkModeToggle');

// Vérifier si l'utilisateur a déjà une préférence
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Appliquer le mode sauvegardé ou le mode par défaut
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Gérer le changement de thème
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
    } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
    }
});
});
