/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.classList.add("hide");

    setTimeout(() => {
      loader.style.display = "none";
    }, 1200);
  }

  startIntro();
});

/* =========================
   INTRO ANIMATION
========================= */

function startIntro() {
  document.querySelectorAll(".hero-text h1, .hero-text h4, .hero-text p").forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
    el.classList.add("intro-show");
  });

  const heroImg = document.querySelector(".hero-img");
  if (heroImg) {
    heroImg.classList.add("intro-zoom");
  }
}

/* =========================
   DISABLE DEFAULT CURSOR
========================= */
document.body.style.cursor = "none";

/* =========================
   PREVENT IMAGE DRAG
========================= */
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("dragstart", e => e.preventDefault());
});

