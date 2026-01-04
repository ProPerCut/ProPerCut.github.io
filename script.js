const cursor = document.getElementById("cursor");

const cutSound = new Audio("assets/sound/cut.mp3");
const rightSound = new Audio("assets/sound/right.mp3");
const scrollSound = new Audio("assets/sound/scroll.mp3");

// Mouse follow
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Left click = cut
document.addEventListener("mousedown", e => {
  if (e.button === 0) {
    cutSound.currentTime = 0;
    cutSound.play();

    cursor.classList.add("cut");
  }
});

// Release = open
document.addEventListener("mouseup", () => {
  cursor.classList.remove("cut");
});

// Right click
document.addEventListener("contextmenu", e => {
  e.preventDefault();
  rightSound.currentTime = 0;
  rightSound.play();
});

// Scroll
window.addEventListener("wheel", () => {
  scrollSound.currentTime = 0;
  scrollSound.play();
});
