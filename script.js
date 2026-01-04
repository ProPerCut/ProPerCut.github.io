// মাউস ফলোয়ার
const cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {x: e.clientX, y: e.clientY, duration: 0.4});
});

// হিরো সেকশন এনিমেশন
const tl = gsap.timeline();

tl.from(".logo, nav a", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out"
});

tl.from(".hero-left", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.5");

tl.from(".hero-right > *", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
}, "-=1");
