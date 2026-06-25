document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("kalakshetraMenu");
  const menu = toggle.nextElementSibling;

  toggle.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      e.stopPropagation();

      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    }
  });

  // Close when clicking elsewhere
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth < 992 &&
      !toggle.contains(e.target) &&
      !menu.contains(e.target)
    ) {
      menu.style.display = "none";
    }
  });
});

function initCardDrag() {
  document.querySelectorAll(".cards-wrapper").forEach((slider) => {

    if (slider.dataset.dragInit) return;
    slider.dataset.dragInit = "true";

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX;
      scrollLeft = slider.scrollLeft;
      slider.classList.add("dragging");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;

      e.preventDefault();

      const walk = (e.pageX - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("dragging");
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("dragging");
    });

    // Mobile
    slider.addEventListener("touchstart", (e) => {
      isDown = true;
      startX = e.touches[0].pageX;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchmove", (e) => {
      if (!isDown) return;

      const walk = (e.touches[0].pageX - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener("touchend", () => {
      isDown = false;
    });

  });
}