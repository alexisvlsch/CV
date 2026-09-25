"use strict";

const TRANSLATIONS = {
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.cv": { fr: "CV", en: "Resume" },
  "nav.gallery": { fr: "Galerie", en: "Gallery" },
  "nav.skills": { fr: "Compétences", en: "Skills" },
  "nav.projects": { fr: "Projets", en: "Projects" },

  "lang.toggleAria": { fr: "Changer la langue / Switch language", en: "Changer la langue / Switch language" },

  "footer.rights": { fr: "© 2025 Alexis Viallesseche. Tous droits réservés.", en: "© 2025 Alexis Viallesseche. All rights reserved." },
  "footer.legal": { fr: "Mentions légales", en: "Legal notice" },

  "legal.title": { fr: "Mentions légales &amp; Politique de confidentialité", en: "Legal Notice &amp; Privacy Policy" },
  "legal.close": { fr: "Fermer", en: "Close" },
  "legal.publisher": {
    fr: "<strong>Responsable de la publication :</strong> Alexis Viallesseche — <a href=\"mailto:viallessechea@gmail.com\">viallessechea@gmail.com</a>",
    en: "<strong>Publisher:</strong> Alexis Viallesseche — <a href=\"mailto:viallessechea@gmail.com\">viallessechea@gmail.com</a>"
  },
  "legal.hosting": {
    fr: "<strong>Hébergement :</strong> Ce site est hébergé par GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis).",
    en: "<strong>Hosting:</strong> This site is hosted by GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA)."
  },
  "legal.ip": {
    fr: "<strong>Propriété intellectuelle :</strong> L'ensemble des contenus présents sur ce site (textes, images, CV) est la propriété exclusive d'Alexis Viallesseche. Toute reproduction sans autorisation est interdite.",
    en: "<strong>Intellectual property:</strong> All content on this site (text, images, resume) is the exclusive property of Alexis Viallesseche. Any reproduction without authorization is prohibited."
  },
  "legal.privacy": {
    fr: "<strong>Politique de confidentialité :</strong> Ce site ne collecte aucune donnée personnelle. Aucun cookie de traçage n'est utilisé. Les données éventuellement saisies dans un formulaire de contact ne sont utilisées qu'à des fins de réponse et ne sont pas transmises à des tiers.",
    en: "<strong>Privacy policy:</strong> This site does not collect any personal data. No tracking cookies are used. Any data entered in a contact form is used only to respond and is never shared with third parties."
  },
  "legal.liability": {
    fr: "<strong>Limitation de responsabilité :</strong> L'auteur s'efforce de maintenir les informations publiées exactes et à jour, mais ne peut garantir l'exhaustivité ou l'absence d'erreur des contenus. Les liens externes présents sur ce site renvoient vers des sites tiers dont l'auteur ne maîtrise pas le contenu.",
    en: "<strong>Limitation of liability:</strong> The author strives to keep the published information accurate and up to date, but cannot guarantee that the content is complete or error-free. External links on this site point to third-party sites the author does not control."
  },

  "index.pageTitle": { fr: "Accueil - CV d'Alexis Viallesseche", en: "Home - Alexis Viallesseche's Resume" },
  "index.status": { fr: "En formation", en: "Studying" },
  "index.role": { fr: "Futur ingénieur en cybersécurité", en: "Future cybersecurity engineer" },
  "index.linkedinAria": { fr: "Voir le profil LinkedIn", en: "View LinkedIn profile" },
  "index.hero.title": { fr: "Bienvenue sur mon portfolio", en: "Welcome to my portfolio" },
  "index.hero.text": { fr: "Je suis Alexis Viallesseche, futur ingénieur en cybersécurité.", en: "I'm Alexis Viallesseche, future cybersecurity engineer." },
  "index.hero.btn": { fr: "Voir mon CV", en: "View my resume" },
  "index.card1.title": { fr: "Mon parcours", en: "My background" },
  "index.card1.text": { fr: "Découvrez mes formations, expériences et projets professionnels.", en: "Discover my education, experience and professional projects." },
  "index.card1.link": { fr: "Explorer le CV →", en: "Explore my resume →" },
  "index.card2.title": { fr: "Ma galerie", en: "My gallery" },
  "index.card2.text": { fr: "Photos de projets, événements scientifiques, ou souvenirs perso.", en: "Photos of projects, science events, and personal memories." },
  "index.card2.link": { fr: "Voir les images →", en: "View the photos →" },
  "index.card3.title": { fr: "Mes compétences", en: "My skills" },
  "index.card3.text": { fr: "Langues, techniques et soft skills illustrées en graphiques animés.", en: "Languages, technical and soft skills shown through animated cards." },
  "index.card3.link": { fr: "Voir les compétences →", en: "View my skills →" },
  "index.card4.title": { fr: "Mes projets", en: "My projects" },
  "index.card4.text": { fr: "Projets scolaires et personnels présentés avec images et détails.", en: "School and personal projects presented with images and details." },
  "index.card4.link": { fr: "Voir les projets →", en: "View my projects →" },

  "cv.pageTitle": { fr: "CV - Alexis Viallesseche", en: "Resume - Alexis Viallesseche" },
  "cv.h1": { fr: "CV d'Alexis Viallesseche", en: "Alexis Viallesseche's Resume" },
  "cv.address": { fr: "<strong>Adresse :</strong> 09500 la bastide de bousignac", en: "<strong>Address:</strong> 09500 la bastide de bousignac" },
  "cv.email": { fr: "<strong>Email :</strong> <a href=\"mailto:viallessechea@gmail.com\">viallessechea@gmail.com</a>", en: "<strong>Email:</strong> <a href=\"mailto:viallessechea@gmail.com\">viallessechea@gmail.com</a>" },
  "cv.phone": { fr: "<strong>Téléphone :</strong> 07 66 65 16 86", en: "<strong>Phone:</strong> +33 7 66 65 16 86" },
  "cv.linkedin": { fr: "<strong>LinkedIn :</strong> <a href=\"www.linkedin.com/in/alexis-viallesseche-67ab5030a/\" target=\"_blank\">Alexis Viallesseche</a>", en: "<strong>LinkedIn:</strong> <a href=\"www.linkedin.com/in/alexis-viallesseche-67ab5030a/\" target=\"_blank\">Alexis Viallesseche</a>" },
  "cv.license": { fr: "<strong>Permis :</strong> B", en: "<strong>Driving licence:</strong> B" },
  "cv.downloadBtn": { fr: "Télécharger mon CV en pdf", en: "Download my resume as PDF" },
  "cv.experiences": { fr: "Expériences", en: "Experience" },
  "cv.exp1": { fr: "<strong>CEMES/CNRS :</strong> Ingénieur d'étude DevOps R&amp;D — Stage de 3 mois (avril-juillet 2026)", en: "<strong>CEMES/CNRS:</strong> DevOps R&amp;D Engineering Intern — 3-month internship (April–July 2026)" },
  "cv.exp2": { fr: "<strong>CHIVA :</strong> ASH (2022) &amp; ASI (2024)", en: "<strong>CHIVA:</strong> Healthcare assistant (2022) &amp; nursing assistant (2024)" },
  "cv.exp3": { fr: "<strong>Recaero, Verniolle :</strong> Stage d'observation (3ème)", en: "<strong>Recaero, Verniolle:</strong> Job-shadowing internship (middle school)" },
  "cv.exp4": { fr: "<strong>Pisciculture Montbel :</strong> Ouvrier polyvalent", en: "<strong>Pisciculture Montbel:</strong> General worker" },
  "cv.exp5": { fr: "<strong>Village des Sciences :</strong> Animateur scientifique (2023)", en: "<strong>Village des Sciences:</strong> Science outreach presenter (2023)" },
  "cv.exp6": { fr: "<strong>Club robotique :</strong> Membre actif (2015-2025)", en: "<strong>Robotics club:</strong> Active member (2015-2025)" },
  "cv.education": { fr: "Formation", en: "Education" },
  "cv.edu1": { fr: "<strong>Université Pazmany Peter Catholique ( PPKE ITK, Hongrie ) :</strong> Master 2 (2026/2027)", en: "<strong>Pázmány Péter Catholic University (PPKE ITK, Hungary):</strong> Master's degree, 2nd year (2026/2027)" },
  "cv.edu2": { fr: "<strong>Upssitech Toulouse :</strong> École d'ingénieur (2024-2027)", en: "<strong>Upssitech Toulouse:</strong> Engineering school (2024-2027)" },
  "cv.edu3": { fr: "<strong>Université de Toulouse:</strong> TOEIC - 800 (B2)", en: "<strong>Université de Toulouse:</strong> TOEIC - 800 (B2)" },
  "cv.edu4": { fr: "<strong>Université Paul Sabatier :</strong> Prépa MPI (2022-2024)", en: "<strong>Université Paul Sabatier:</strong> MPI prep classes (2022-2024)" },
  "cv.edu5": { fr: "<strong>Cité scolaire de Mirepoix :</strong> Bac S - Mention bien", en: "<strong>Cité scolaire de Mirepoix:</strong> Scientific baccalaureate - With honors" },
  "cv.edu6": { fr: "<strong>Candidat libre :</strong> Brevet d'initiation à l'aeronautique - Mention Très bien", en: "<strong>Independent candidate:</strong> Aeronautics introduction certificate - With high honors" },
  "cv.edu7": { fr: "<strong>Cité scolaire de Mirepoix :</strong> PSC1 (2019)", en: "<strong>Cité scolaire de Mirepoix:</strong> First-aid certificate PSC1 (2019)" },

  "gallery.pageTitle": { fr: "Galerie - Alexis Viallesseche", en: "Gallery - Alexis Viallesseche" },
  "gallery.h1": { fr: "Galerie Photo", en: "Photo Gallery" },
  "gallery.img1Alt": { fr: "Projet robotique", en: "Robotics project" },
  "gallery.img2Alt": { fr: "Stage pisciculture", en: "Fish farming internship" },

  "projects.pageTitle": { fr: "Projets - Alexis Viallesseche", en: "Projects - Alexis Viallesseche" },
  "projects.h1": { fr: "Mes Projets", en: "My Projects" },
  "projects.p1.title": { fr: "Robot suiveur de ligne", en: "Line-following robot" },
  "projects.p1.text": {
    fr: "Un robot autonome construit en club, capable de suivre un tracé noir grâce à des capteurs infrarouges. A l'aide de l'intégration d'une IA légère, ce robot est capable de retenir les pièges d'un labirynthe pour trouver la sortie d'un coup lors de la réintroduction de celui-ci à l'entré du labyrinthe.",
    en: "An autonomous robot built at the robotics club, able to follow a black line using infrared sensors. With a lightweight AI on board, the robot can memorize a maze's traps and find the exit in one go the next time it's placed at the entrance."
  },
  "projects.p2.title": { fr: "Automatisation jeux de société", en: "Board game automation" },
  "projects.p2.text": {
    fr: "Avec mon club robotique au Village des Sciences, j'ai pu automatiser un jeu de nim comprenant un plateau de jeu manipulant des pieces de manière autonome et un système où une personne joue contre un ordinateur ayant été programmé pour savoir gagner dans toutes les conditions.",
    en: "With my robotics club at the Village des Sciences, I automated a Nim game featuring a board that moves pieces autonomously, letting a person play against a computer programmed to win under every condition."
  },
  "projects.p3.title": { fr: "Capsule vidéo", en: "Video capsule" },
  "projects.p3.text": {
    fr: "Lors de mon projet d'automatisation d'une horloge astrolabique, j'ai confectionné sous formes de petites vidéos explicatives, tout le fonctionnement de notre perception du système solaire. Dans ces vidéos des termes comme sphère céleste, horizon locale, cercle ecliptique, astrolabe, déclinaison, temps sidérale... sont évoqués et expliqués. Dans le but final d'expliquer le fonctionnement d'un astrolabe automatisé en horloge.",
    en: "For my project automating an astrolabe clock, I produced a series of short explainer videos covering how we perceive the solar system. They cover concepts such as the celestial sphere, local horizon, ecliptic circle, astrolabe, declination, and sidereal time, all leading up to explaining how an automated astrolabe clock works."
  },
  "projects.p4.title": { fr: "Conférences", en: "Talks" },
  "projects.p4.text": {
    fr: "J'ai animé des conférences de 1h30 sur différents sujets de robotique, notamment l'astrolabe et l'horloge astronomique. Ces conférences ont été réalisées au cinéma de Mirepoix (09), à l'Observatoire des Pléiades et dans l'amphithéâtre de la Cité de l'Espace.",
    en: "I've given 90-minute talks on various robotics topics, including the astrolabe and the astronomical clock. These talks were held at the Mirepoix cinema (09), the Pléiades Observatory, and the amphitheater of the Cité de l'Espace."
  },

  "skills.pageTitle": { fr: "Compétences", en: "Skills" },
  "skills.h1": { fr: "Mes Compétences", en: "My Skills" },
  "skills.card1.front": { fr: "Langages de programmation", en: "Programming languages" },
  "skills.card1.back": { fr: "Python, Java, PHP, HTML/CSS, C", en: "Python, Java, PHP, HTML/CSS, C" },
  "skills.card2.front": { fr: "Bureautique", en: "Office tools" },
  "skills.card2.back": { fr: "Word, Excel, PowerPoint", en: "Word, Excel, PowerPoint" },
  "skills.card3.front": { fr: "Systèmes", en: "Operating systems" },
  "skills.card3.back": { fr: "Linux, Windows", en: "Linux, Windows" },
  "skills.card4.front": { fr: "Outils", en: "Tools" },
  "skills.card4.back": { fr: "Git, IntelliJ, VS Code, Figma, PostgreSQL", en: "Git, IntelliJ, VS Code, Figma, PostgreSQL" },
  "skills.card5.front": { fr: "Développement", en: "Development" },
  "skills.card5.back": { fr: "Web, orienté objet, conception de base de données", en: "Web, object-oriented, database design" },
  "skills.card6.front": { fr: "Qualités personnelles", en: "Personal qualities" },
  "skills.card6.back": {
    fr: "Communication, écoute, travail en équipe, ponctualité,<br>motivation, autonomie, curiosité, analyse, dynamisme,<br>responsabilité, gestion du stress, attitude positive",
    en: "Communication, listening, teamwork, punctuality,<br>motivation, autonomy, curiosity, analysis, drive,<br>responsibility, stress management, positive attitude"
  },
  "skills.card7.front": { fr: "Diplômes", en: "Certifications" },
  "skills.card7.back": { fr: "Brevet des collèges, Baccalauréat, BIA (Brevet d'Initiation Aéronautique)", en: "Brevet des collèges, Baccalauréat, BIA (Aeronautics introduction certificate)" },
  "skills.card8.front": { fr: "Activités", en: "Activities" },
  "skills.card8.back": {
    fr: "Représentant des jeunes chez Vives la Science, rugby, musculation,<br>organisation d'évènement,<br>résolution de problèmes, apprentissage rapide",
    en: "Youth representative at Vives la Science, rugby, weight training,<br>event organization,<br>problem solving, fast learning"
  }
};

function getStoredLang() {
  return localStorage.getItem("lang") || "fr";
}

function applyTranslations(lang) {
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = TRANSLATIONS[el.getAttribute("data-i18n")];
    if (entry) el.textContent = entry[lang] || entry.fr;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const entry = TRANSLATIONS[el.getAttribute("data-i18n-html")];
    if (entry) el.innerHTML = entry[lang] || entry.fr;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const entry = TRANSLATIONS[key];
      if (entry) el.setAttribute(attr, entry[lang] || entry.fr);
    });
  });

  document.querySelectorAll(".lang-option").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-lang") === lang);
  });
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
}

applyTranslations(getStoredLang());

const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    setLang(getStoredLang() === "fr" ? "en" : "fr");
  });
}
