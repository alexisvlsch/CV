"use strict";

(function () {
  const overlay = document.getElementById("legal-modal-overlay");
  const openBtn = document.getElementById("legal-modal-open");
  const closeBtn = document.getElementById("legal-modal-close");

  if (!overlay || !openBtn || !closeBtn) return;

  function openModal() {
    overlay.classList.add("active");
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove("active");
    openBtn.focus();
  }

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeModal();
    }
  });
})();
