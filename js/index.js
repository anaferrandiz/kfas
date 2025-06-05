'use strict'


// EFECTO PARALLAX EN SECTION 02

window.addEventListener('scroll', () => {
  const section = document.querySelector('.wrapper__section__02');
  const overlay = document.querySelector('.wrap__img__section__02');

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // Calcular cuánto has scrolleado dentro de la sección
  const progress = (scrollY - sectionTop) / (sectionHeight - windowHeight);

  // Aplicar el movimiento solo si estamos dentro de la sección
  if (progress >= 0 && progress <= 1) {
    const translateY = progress * 100;
    overlay.style.transform = `translateY(-${translateY}%)`;
  } else if (progress < 0) {
    overlay.style.transform = `translateY(0%)`;
  } else {
    overlay.style.transform = `translateY(-100%)`;
  }
});
