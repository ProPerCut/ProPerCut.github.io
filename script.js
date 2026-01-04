const cursor = document.querySelector('#cursor');

// Audio setup
const leftClickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'); // Scissor cut
const rightClickSound = new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3'); // Metal clang
const scrollSound = new Audio('https://www.soundjay.com/mechanical/sounds/mechanical-clutter-1.mp3'); // Scraping

// 1. Instant Mouse Follow
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
});

// 2. Spark Effect
function createSpark(x, y, color = "#00ffff") {
    for (let i = 0; i < 8; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.background = color;
        document.body.appendChild(spark);
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        gsap.to(spark, {
            x: (Math.random() - 0.5) * 150, y: (Math.random() - 0.5) * 150,
            opacity: 0, scale: 0, duration: 0.7, onComplete: () => spark.remove()
        });
    }
}

// 3. Click Interactions
document.addEventListener('mousedown', (e) => {
    if (e.button === 0) { // Left Click
        leftClickSound.play();
        createSpark(e.clientX, e.clientY, "#00ffff");
    } else if (e.button === 2) { // Right Click
        rightClickSound.play();
        createSpark(e.clientX, e.clientY, "#ff00ff");
    }
    gsap.to(cursor, { scale: 0.6, rotate: -90, duration: 0.05 });
});

document.addEventListener('mouseup', () => {
    gsap.to(cursor, { scale: 1, rotate: -135, duration: 0.05 });
});

// 4. Scroll Sound
window.addEventListener('wheel', () => {
    if(scrollSound.paused) {
        scrollSound.volume = 0.2;
        scrollSound.play();
    }
});

// 5. Magnetic Effect & Hover
const magLinks = document.querySelectorAll('.mag-link');
magLinks.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(link, { x: x * 0.4, y: y * 0.4, duration: 0.3 });
        gsap.to(cursor, { scale: 1.5, color: '#ff00ff' });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { x: 0, y: 0, duration: 0.3 });
        gsap.to(cursor, { scale: 1, color: '#00ffff' });
    });
});

// Disable Right Click Menu to allow custom sound
document.addEventListener('contextmenu', e => e.preventDefault());
