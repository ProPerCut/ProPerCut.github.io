// 1. Mouse Follower
const cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {x: e.clientX, y: e.clientY, duration: 0.5});
});

// 2. Parallax Image Effect
const imgBox = document.querySelector('#parallax-img');
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;
    gsap.to(imgBox, {rotationY: x, rotationX: -y, duration: 1});
});

// 3. Hero Text Reveal
gsap.from(".hero-text > *", {
    opacity: 0,
    x: 100,
    duration: 1.5,
    stagger: 0.3,
    ease: "power4.out"
});

// 4. Background Particles
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for(let i=0; i<100; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();
