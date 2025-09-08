document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid__agenda");
    const items = Array.from(grid.children); // Todos los conciertos
    const paginationContainer = document.getElementById("pagination");

    const itemsPerPage = 6;      // Ajusta cuántas tarjetas por página
    const maxVisiblePages = 5;   // Máximo de números visibles
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);

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

        // Botón anterior
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

        // Números de página dinámicos
        const pageNumbers = getPageNumbers();
        pageNumbers.forEach(page => {
            const span = document.createElement("span");
            span.textContent = page;
            span.classList.add("page-number");
            if (page === currentPage) span.classList.add("active");
            span.addEventListener("click", () => {
                currentPage = page;
                update();
            });
            paginationContainer.appendChild(span);

            // Agregar guiones entre los números
            if (page !== pageNumbers[pageNumbers.length - 1]) {
                const dash = document.createElement("span");
                dash.textContent = "-";
                paginationContainer.appendChild(dash);
            }
        });

        // Botón siguiente
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
}


    // Inicializar
    update();
});
