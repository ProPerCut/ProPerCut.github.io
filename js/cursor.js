/* =========================
   CUSTOM SCISSOR CURSOR
========================= */

const cursor = document.getElementById("cursor");

// SOUND FILES
const cutSound = new Audio("assets/sound/cut.mp3");
const scrollSound = new Audio("assets/sound/scroll.mp3");
const hoverSound = new Audio("assets/sound/hover.mp3");

// MOUSE FOLLOW
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// LEFT CLICK (CUT)
document.addEventListener("mousedown", (e) => {
  if (e.button === 0) {
    cutSound.currentTime = 0;
    cutSound.play();

    cursor.classList.add("cut");

    // RIPPLE EFFECT
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("cut");
});

// HOVER SOUND
document.querySelectorAll("a, button, .service-card, .portfolio-card").forEach(el => {
  el.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
    cursor.classList.add("glow");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("glow");
  });
});

// SCROLL SOUND
window.addEventListener("wheel", () => {
  scrollSound.currentTime = 0;
  scrollSound.play();
});
