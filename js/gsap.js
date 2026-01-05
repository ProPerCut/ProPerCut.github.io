/* =========================
   GSAP CORE ANIMATIONS
========================= */

gsap.registerPlugin(ScrollTrigger);

/* HERO INTRO */
gsap.from(".hero-text h1", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero-text h4", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power4.out"
});

gsap.from(".hero-text p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: "power4.out"
});

gsap.from(".hero-img", {
  scale: 0.85,
  opacity: 0,
  duration: 1.4,
  ease: "expo.out"
});

/* SECTION REVEAL */
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 120,
    duration: 1.4,
    ease: "power4.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});

/* PORTFOLIO CARD STAGGER */
gsap.from(".portfolio-card", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".portfolio-grid",
    start: "top 75%"
  }
});

