const cursor = document.getElementById("cursor");

// ===== SOUNDS =====
const cutSound = new Audio("assets/sound/cut.mp3");
const rightSound = new Audio("assets/sound/right.mp3");
const scrollSound = new Audio("assets/sound/scroll.mp3");

cutSound.volume = 0.6;
rightSound.volume = 0.6;
scrollSound.volume = 0.3;

// ===== FOLLOW MOUSE =====
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ===== LEFT CLICK (SCISSOR CLOSE) =====
document.addEventListener("mousedown", e => {
  if (e.button === 0) {
    cutSound.currentTime = 0;
    cutSound.play();

    cursor.classList.add("cut");
    spark(e.clientX, e.clientY);
  }
});

// ===== RELEASE (SCISSOR OPEN) =====
document.addEventListener("mouseup", () => {
  cursor.classList.remove("cut");
});

// ===== RIGHT CLICK =====
document.addEventListener("contextmenu", e => {
  e.preventDefault();
  rightSound.currentTime = 0;
  rightSound.play();
});

// ===== SCROLL =====
window.addEventListener("wheel", () => {
  scrollSound.currentTime = 0;
  scrollSound.play();
});

// ===== SPARK EFFECT =====
function spark(x, y) {
  for (let i = 0; i < 5; i++) {
    const s = document.createElement("div");
    s.className = "spark";
    document.body.appendChild(s);

    s.style.left = x + "px";
    s.style.top = y + "px";

    s.animate([
      { transform: "scale(1)", opacity: 1 },
      {
        transform: `translate(${Math.random()*100-50}px, ${Math.random()*100-50}px) scale(0)`,
        opacity: 0
      }
    ], { duration: 500 });

    setTimeout(() => s.remove(), 500);
  }
}
