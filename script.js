const cursor = document.querySelector('#cursor');
// একটি মেটাল কাটিং সাউন্ড লিংক (এটি ট্রাই করে দেখুন)
const cutSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');

// ১. মাউস মুভমেন্ট
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
    });
});

// ২. স্পার্ক (লাইট) তৈরির ফাংশন
function createSpark(x, y) {
    for (let i = 0; i < 5; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        document.body.appendChild(spark);
        
        // মাউসের জায়গায় স্পার্ক সেট করা
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        
        // স্পার্ক চারদিকে ছড়িয়ে পড়ার এনিমেশন
        gsap.to(spark, {
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            opacity: 0,
            scale: 0,
            duration: 0.5,
            onComplete: () => spark.remove()
        });
    }
}

// ৩. ক্লিক এনিমেশন, সাউন্ড এবং লাইট
document.addEventListener('mousedown', (e) => {
    cutSound.play(); // সাউন্ড বাজবে
    createSpark(e.clientX, e.clientY); // স্পার্ক তৈরি হবে
    
    gsap.to(cursor, { 
        scale: 0.7, 
        rotate: -90, // কাটার সময় সোজা হবে
        duration: 0.05 
    });
});

document.addEventListener('mouseup', () => {
    gsap.to(cursor, { 
        scale: 1, 
        rotate: -135, // আবার বাম দিকে ফিরে যাবে
        duration: 0.05 
    });
});

// ৪. লিঙ্ক হোভার ইফেক্ট
const links = document.querySelectorAll('a, button, .nav-btn');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 1.5, color: '#ff00ff', duration: 0.2 });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, color: '#00ffff', duration: 0.2 });
    });
});

// ৫. এন্ট্রান্স এনিমেশন
const tl = gsap.timeline();
tl.from(".logo, nav a", { y: -50, opacity: 0, duration: 0.8, stagger: 0.1 });
tl.from(".hero-left", { x: -100, opacity: 0, duration: 1 }, "-=0.4");
tl.from(".hero-right > *", { x: 100, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.8");
