const cursor = document.getElementById("cursor");

// Sounds
const cutSound = new Audio("assets/sound/cut.mp3");

// Cursor follow (PC only)
if (cursor) {
  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.addEventListener("mousedown", () => {
    cutSound.currentTime = 0;
    cutSound.play();
    cursor.classList.add("cut");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("cut");
  });
}

// GSAP Cinematic Scroll
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-video", {
  scale: 1,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom+=200 top",
    scrub: true
  }
});

gsap.from(".hero-tag", {
  y: 30,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-title", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  delay: .2
});

gsap.from(".hero-desc, .btn", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: .4
});
