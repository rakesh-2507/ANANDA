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

document.querySelectorAll(".cards-wrapper").forEach((slider) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("dragging");

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;

    slider.scrollLeft = scrollLeft - walk;
  });
});

document.querySelectorAll(".cards-wrapper").forEach((slider) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  const startDrag = (x) => {
    isDown = true;
    startX = x;
    scrollLeft = slider.scrollLeft;
  };

  const moveDrag = (x) => {
    if (!isDown) return;

    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };

  slider.addEventListener("mousedown", (e) => startDrag(e.pageX));
  slider.addEventListener("mousemove", (e) => moveDrag(e.pageX));
  slider.addEventListener("mouseup", () => (isDown = false));
  slider.addEventListener("mouseleave", () => (isDown = false));

  slider.addEventListener("touchstart", (e) => startDrag(e.touches[0].pageX));
  slider.addEventListener("touchmove", (e) => moveDrag(e.touches[0].pageX));
  slider.addEventListener("touchend", () => (isDown = false));
});
