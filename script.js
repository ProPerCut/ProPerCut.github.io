const cursor = document.getElementById('cursor');
const scissorsImg = document.getElementById('scissors');
const leftClickSound = new Audio('assets/sound/cut.mp3');

let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;

// মাউস ড্র্যাগ অ্যানিমেশন (Smooth follow + Tilt)
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // হোভার চেক
    const target = e.target;
    if (target.closest('a, button, .logo, span, h1')) {
        cursor.classList.add('hover-active');
    } else {
        cursor.classList.remove('hover-active');
    }
});

function animateCursor() {
    // মাউস এর পেছনে কার্সার ড্র্যাগ হয়ে আসবে (Lag effect)
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;
    
    ballX = ballX + (distX * 0.15);
    ballY = ballY + (distY * 0.15);
    
    cursor.style.left = ballX + 'px';
    cursor.style.top = ballY + 'px';
    
    // মুভমেন্ট অনুযায়ী কাঁচি একটু হেলে থাকবে (Tilt animation)
    let tilt = distX * 0.1; 
    scissorsImg.style.transform = `rotate(${tilt}deg)`;
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// ক্লিক অ্যানিমেশন
document.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        leftClickSound.currentTime = 0;
        leftClickSound.play().catch(() => {});
        gsap.to(scissorsImg, { scale: 0.7, rotate: -40, duration: 0.05, yoyo: true, repeat: 1 });
    }
});

// স্কিল রোটেটর
const skills = ["YouTube Automation", "Cinematic Documentaries", "Mystery & Crime", "High-End Sound Design", "Premium Color Grading"];
let skillIndex = 0;
const skillElement = document.getElementById('changing-text');

setInterval(() => {
    gsap.to(skillElement, { opacity: 0, y: -10, duration: 0.5, onComplete: () => {
        skillIndex = (skillIndex + 1) % skills.length;
        skillElement.textContent = skills[skillIndex];
        gsap.to(skillElement, { opacity: 1, y: 0, duration: 0.5 });
    }});
}, 3000);

// ভিডিও ডাটা ও লোডিং
const myVideos = [
    { title: "Hells Angels Fear This Biker Gang", id: "bbC0Au4jAtE", channel: "DF" },
    { title: "King David's Palace Discovery", id: "9DSw3CVPC_I", channel: "HTU" },
    { title: "The Epic of Gilgamesh Mystery", id: "CVz1nDmI4Bc", channel: "TCM" },
    { title: "AI Just Opened Ancient Library", id: "8lrIFA3pWjw", channel: "UD" },
    { title: "The Mystery of Bermuda Triangle", id: "K9p9V-Q8_Gg", channel: "MP" }
];

function loadVideos() {
    const videoGrid = document.querySelector('.service-grid');
    if (!videoGrid) return;
    let videoHTML = "";
    myVideos.forEach(v => {
        videoHTML += `
            <div class="service-card">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/${v.id}" frameborder="0" allowfullscreen></iframe>
                <div style="padding: 20px;">
                    <h3 style="font-size: 1rem; color: #fff; margin-bottom: 8px;">${v.title}</h3>
                    <p style="color: #ff3c3c; font-size: 0.8rem; font-weight: bold; letter-spacing: 1px;">${v.channel}</p>
                </div>
            </div>`;
    });
    videoGrid.innerHTML = videoHTML;
}
window.onload = loadVideos;
