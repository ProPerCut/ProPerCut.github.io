/* =========================
   GSAP SCROLL STORYTELLING
========================= */

gsap.registerPlugin(ScrollTrigger);

// HERO IMAGE
gsap.from(".hero-img", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  },
  y: 80,
  scale: 0.9,
  opacity: 0
});

// HERO TEXT
gsap.from(".hero-text > *", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top 60%",
  },
  y: 40,
  opacity: 0,
  stagger: 0.15
});

// SERVICES
gsap.from(".service-card", {
  scrollTrigger: {
    trigger: "#services",
    start: "top 70%",
  },
  y: 60,
  opacity: 0,
  stagger: 0.2
});

// PORTFOLIO
gsap.from(".portfolio-card", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top 70%",
  },
  scale: 0.9,
  opacity: 0,
  stagger: 0.2
});

// ABOUT
gsap.from(".about-left", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 70%",
  },
  x: -80,
  opacity: 0
});
