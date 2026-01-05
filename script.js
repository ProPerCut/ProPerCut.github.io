const cursor = document.getElementById("cursor");
const cutSound = document.getElementById("cutSound");

// FOLLOW MOUSE
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// CLICK EFFECT
document.addEventListener("mousedown", () => {
  cursor.classList.add("cut");
  cutSound.currentTime = 0;
  cutSound.play();
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("cut");
});

// MENU HOVER EFFECT
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursor.style.color = "#ff3c00";
  });

  link.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) rotate(-135deg)";
    cursor.style.color = "#00ffff";
  });
});
