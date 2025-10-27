'use strict'


document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid__agenda");
    const items = Array.from(grid.children);
    const paginationContainer = document.getElementById("pagination");

    const itemsPerPage = 6;      // tarjetas por página
    const maxVisiblePages = 5;   // máximo de números visibles
    const totalPages = Math.ceil(items.length / itemsPerPage);
    let currentPage = 1;

    // 🔹 Restaurar página guardada en sessionStorage si existe
    const savedPage = parseInt(sessionStorage.getItem("agendaPage"), 10);
    if (!isNaN(savedPage) && savedPage >= 1 && savedPage <= totalPages) {
        currentPage = savedPage;
    }

    function renderItems() {
        items.forEach((item, index) => {
            item.style.display =
                index >= (currentPage - 1) * itemsPerPage &&
                index < currentPage * itemsPerPage
                    ? "block"
                    : "none";
        });
    }

    function getPageNumbers() {
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = startPage + maxVisiblePages - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }

    function renderPagination() {
        paginationContainer.innerHTML = "";

        // Flecha izquierda
        const prev = document.createElement("span");
        prev.textContent = "˂";
        prev.classList.add("arrow");
        if (currentPage === 1) {
            prev.classList.add("disabled");
        } else {
            prev.addEventListener("click", () => {
                currentPage--;
                update();
            });
        }
        paginationContainer.appendChild(prev);

        // Números de página
        getPageNumbers().forEach((page, idx, arr) => {
            const span = document.createElement("span");
            span.textContent = page;
            span.classList.add("page-number");
            if (page === currentPage) span.classList.add("active");
            span.addEventListener("click", () => {
                currentPage = page;
                update();
            });
            paginationContainer.appendChild(span);

            if (idx !== arr.length - 1) {
                const dash = document.createElement("span");
                dash.textContent = "-";
                paginationContainer.appendChild(dash);
            }
        });

        // Flecha derecha
        const next = document.createElement("span");
        next.textContent = "˃";
        next.classList.add("arrow");
        if (currentPage === totalPages) {
            next.classList.add("disabled");
        } else {
            next.addEventListener("click", () => {
                currentPage++;
                update();
            });
        }
        paginationContainer.appendChild(next);
    }

    function update() {
        renderItems();
        renderPagination();
        window.scrollTo({ top: 0, behavior: "smooth" });
        sessionStorage.setItem("agendaPage", currentPage);
    }

    // 🔹 Reiniciar a página 1 solo si se hace clic en el enlace de Agenda
    const agendaLink = document.querySelector('a[href="agenda.html"]');
    if (agendaLink) {
        agendaLink.addEventListener("click", () => {
            sessionStorage.removeItem("agendaPage"); // limpiar la página guardada
            currentPage = 1;
            update();
        });
    }

    update();
});
