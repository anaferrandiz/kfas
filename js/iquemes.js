'use strict';

const buttonMes = document.querySelector('.quemes'); 
const windowGran = document.querySelector('.wrapper__window__iquemes');

// Abrir el contenedor al pasar el ratón por encima
buttonMes.addEventListener('mouseenter', function() {
    windowGran.classList.add('isActive'); 
});

// Cerrar el contenedor cuando el ratón salga
buttonMes.addEventListener('mouseleave', function() {
    windowGran.classList.remove('isActive'); // Quitamos la clase para ocultar la ventana
});
