document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            projectCards.forEach((card) => {
                const category = card.getAttribute("data-category");
                const shouldShow = filter === "all" || category === filter;
                card.classList.toggle("is-hidden", !shouldShow);
            });
        });
    });
});
