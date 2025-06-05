'use strict'


// EFECTO PARALLAX EN SECTION 02
window.addEventListener('scroll', () => {
  const section = document.querySelector('.wrapper__section__02');
  const overlay = document.querySelector('.wrap__img__section__02');

  const rect = section.getBoundingClientRect();
  const sectionHeight = section.offsetHeight;
  const windowHeight = window.innerHeight;

  const visiblePart = windowHeight - rect.top;

  // 🔍 Ajustar para móvil
  const isMobile = window.innerWidth <= 968;
  const mobileFactor = isMobile ? 0.6 : 1; // Se va un 40% antes en móvil

  const totalScrollable = sectionHeight * mobileFactor;

  let progress = visiblePart / totalScrollable;
  progress = Math.min(Math.max(progress, 0), 1);

  overlay.style.transform = `translateY(-${progress * 100}%)`;
});
