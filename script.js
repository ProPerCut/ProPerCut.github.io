const cursor = document.querySelector('#cursor');
// কাঁচি কাটার সাউন্ড (একটি অনলাইন ফ্রি সাউন্ড লিংক)
const cutSound = new Audio('https://www.soundjay.com/buttons/sounds/button-37a.mp3');

// ১. মাউস মুভমেন্ট (একদম ইনস্ট্যান্ট ফলো করবে)
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0, // ডিলে ০ করে দিলাম যাতে সাথে সাথে ঘোরে
    });
});

// ২. ক্লিক এনিমেশন এবং সাউন্ড
document.addEventListener('mousedown', () => {
    cutSound.play(); // সাউন্ড বাজবে
    gsap.to(cursor, { 
        scale: 0.6, 
        rotate: 0, 
        duration: 0.05 
    });
});

document.addEventListener('mouseup', () => {
    gsap.to(cursor, { 
        scale: 1, 
        rotate: -45, 
        duration: 0.05 
    });
});

// ৩. লিংক বা বাটনের ওপর নিলে মাউস রিঅ্যাকশন (Hover Effect)
const links = document.querySelectorAll('a, button, .nav-btn');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, { 
            scale: 1.5, 
            color: '#ff00ff', // হোভার করলে রঙ গোলাপি হয়ে যাবে
            duration: 0.2 
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, { 
            scale: 1, 
            color: '#00ffff', // আবার সায়ান রঙে ফিরবে
            duration: 0.2 
        });
    });
});

// ৪. পেজ এন্ট্রান্স এনিমেশন (আগের মতোই থাকবে)
const tl = gsap.timeline();
tl.from(".logo, nav a", { y: -50, opacity: 0, duration: 0.8, stagger: 0.1 });
tl.from(".hero-left", { x: -100, opacity: 0, duration: 1 }, "-=0.4");
tl.from(".hero-right > *", { x: 100, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.8");
