document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");

    dropdownToggle.addEventListener("click", function (e) {
        if (window.innerWidth < 992) {
            e.preventDefault();

            const menu = this.nextElementSibling;
            menu.classList.toggle("show");
        }
    });
});
