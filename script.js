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
// Case study video hover (PC only)
document.querySelectorAll(".case-media video").forEach(video => {
  video.parentElement.addEventListener("mouseenter", () => {
    video.play();
  });
  video.parentElement.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

// Scroll reveal for case cards
gsap.utils.toArray(".case-card").forEach(card => {
  gsap.from(card, {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    }
  });
});
// PROCESS PAGE SCROLL REVEAL
gsap.utils.toArray(".process-step").forEach((step, i) => {
  gsap.from(step, {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: i * 0.05,
    scrollTrigger: {
      trigger: step,
      start: "top 85%",
    }
  });
});
