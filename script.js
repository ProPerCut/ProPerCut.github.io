// ১. মাউস কন্ট্রোল ও ড্র্যাগ এনিমেশন
const cursor = document.getElementById('cursor');
const scissorsImg = document.getElementById('scissors');
const leftClickSound = new Audio('assets/sound/cut.mp3');

let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // হোভার করলে মাউস এনিমেশন ক্লাস যোগ
    if (e.target.closest('a, button, .logo, span, h1, h2')) {
        cursor.classList.add('cursor-hover');
    } else {
        cursor.classList.remove('cursor-hover');
    }
});

function moveCursor() {
    // ড্র্যাগিং ইফেক্ট (মাউসের পেছনে কার্সার আসবে)
    ballX += (mouseX - ballX) * 0.15;
    ballY += (mouseY - ballY) * 0.15;

    cursor.style.transform = `translate(${ballX}px, ${ballY}px)`;

    // ড্র্যাগ করার সময় কাঁচি কাত হওয়া (Tilt)
    let tilt = (mouseX - ballX) * 0.1;
    scissorsImg.style.transform = `rotate(${tilt}deg)`;

    requestAnimationFrame(moveCursor);
}
moveCursor();

// ২. ক্লিক এনিমেশন ও সাউন্ড
document.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        leftClickSound.currentTime = 0;
        leftClickSound.play().catch(() => {}); // সাউন্ড প্লে
        gsap.to(scissorsImg, { scale: 0.7, rotate: -40, duration: 0.05, yoyo: true, repeat: 1 });
    }
});

// ৩. স্কিল রোটেটর এনিমেশন
const skills = ["YouTube Automation", "Cinematic Documentary", "Mystery & Crime", "Sound Design", "Color Grading"];
let skillIndex = 0;
const skillText = document.getElementById('changing-text');

setInterval(() => {
    gsap.to(skillText, { opacity: 0, y: -15, duration: 0.5, onComplete: () => {
        skillIndex = (skillIndex + 1) % skills.length;
        skillText.textContent = skills[skillIndex];
        gsap.to(skillText, { opacity: 1, y: 0, duration: 0.5 });
    }});
}, 3000);

// ৪. পোর্টফোলিও ভিডিও লোড করা
const myVideos = [
    { title: "Hells Angels Fear This Biker Gang", id: "bbC0Au4jAtE", channel: "DF" },
    { title: "King David's Palace Discovery", id: "9DSw3CVPC_I", channel: "HTU" },
    { title: "The Epic of Gilgamesh Mystery", id: "CVz1nDmI4Bc", channel: "TCM" },
    { title: "AI Just Opened Ancient Library", id: "8lrIFA3pWjw", channel: "UD" },
    { title: "The Mystery of Bermuda Triangle", id: "K9p9V-Q8_Gg", channel: "MP" }
];

function displayVideos() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = myVideos.map(v => `
        <div class="service-card">
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/${v.id}" frameborder="0" allowfullscreen></iframe>
            <div style="padding: 20px;">
                <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 5px;">${v.title}</h3>
                <p style="color: #ff3c3c; font-weight: bold; font-size: 0.8rem;">CHANNEL: ${v.channel}</p>
            </div>
        </div>
    `).join('');
}

window.onload = displayVideos;
