// Scissor Follower Logic
const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

// Click Animation (Cutting effect)
document.addEventListener('mousedown', () => {
    gsap.to(cursor, { scale: 0.7, rotate: 0, duration: 0.05 });
});

document.addEventListener('mouseup', () => {
    gsap.to(cursor, { scale: 1, rotate: -45, duration: 0.05 });
});

// Hero Section Entrance Animation
const tl = gsap.timeline();

tl.from(".logo, nav a", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
});

tl.from(".hero-left", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}, "-=0.4");

tl.from(".hero-right > *", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
}, "-=0.8");
