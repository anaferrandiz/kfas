'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const principalImg = document.querySelector('.product__img__principal img');
    const thumbs = document.querySelectorAll('.product__galeria__imgs .img__product');

    if (!principalImg || thumbs.length === 0) return;

    let index = 0;
    const total = thumbs.length;

    /** ----------------------------
     *  CAMBIAR IMAGEN
     * -----------------------------*/
    function actualizarImagen() {
        const full = thumbs[index].dataset.full || thumbs[index].src;
        principalImg.src = full;

        thumbs.forEach(t => t.classList.remove('active'));
        thumbs[index].classList.add('active');
    }

    /** ----------------------------
     *  MINIATURAS
     * -----------------------------*/
    thumbs.forEach((thumb, i) => {
        thumb.addEventListener('click', () => {
            index = i;
            actualizarImagen();
        });
    });

    /** ----------------------------
     *  CLICK EN LA IMAGEN (DESKTOP)
     * -----------------------------*/
    principalImg.addEventListener('click', (e) => {
        const rect = principalImg.getBoundingClientRect();
        const x = e.clientX - rect.left;    // posición dentro de la imagen

        if (x < rect.width / 2) {
            // clic izquierdo → anterior
            index = (index - 1 + total) % total;
        } else {
            // clic derecho → siguiente
            index = (index + 1) % total;
        }

        actualizarImagen();
    });

    /** ----------------------------
     *  SWIPE MÓVIL
     * -----------------------------*/
    let startX = 0;

    principalImg.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    principalImg.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (diff > 40) {
            index = (index + 1) % total;
            actualizarImagen();
        } else if (diff < -40) {
            index = (index - 1 + total) % total;
            actualizarImagen();
        }
    }, { passive: true });

    actualizarImagen();
});
