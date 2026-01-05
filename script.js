const cursor = document.getElementById('cursor');
const scissorsImg = document.getElementById('scissors');

// সাউন্ড পাথ আপডেট করা হয়েছে
const leftClickSound = new Audio('assets/sound/cut.mp3');
const rightClickSound = new Audio('assets/sound/right.mp3');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// লেফট ক্লিক - কাট সাউন্ড
document.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        leftClickSound.currentTime = 0;
        leftClickSound.play().catch(() => {});
        gsap.to(scissorsImg, { scale: 0.7, rotate: -30, duration: 0.05 });
    }
});

document.addEventListener('mouseup', () => {
    gsap.to(scissorsImg, { scale: 1, rotate: 0, duration: 0.1 });
});

// রাইট ক্লিক - কাস্টম সাউন্ড ও এনিমেশন
document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // রাইট ক্লিক মেনু বন্ধ করা হয়েছে প্রিমিয়াম ফিল এর জন্য
    rightClickSound.currentTime = 0;
    rightClickSound.play().catch(() => {});
    gsap.to(scissorsImg, { x: 10, repeat: 3, yoyo: true, duration: 0.05, onComplete: () => gsap.set(scissorsImg, {x: 0}) });
});

// ভিডিও ডাটা
const myVideos = [
    { title: "Hells Angels Fear This Brutal Biker Gang", id: "bbC0Au4jAtE", channel: "DF" },
    { title: "King David's Palace Discovery", id: "9DSw3CVPC_I", channel: "HTU" },
    { title: "The Epic of Gilgamesh Mystery", id: "CVz1nDmI4Bc", channel: "TCM" },
    { title: "AI Just Opened Ancient Library", id: "8lrIFA3pWjw", channel: "UD" },
    { title: "The Mystery of the Bermuda Triangle", id: "K9p9V-Q8_Gg", channel: "MP" }
];

function loadVideos() {
    const videoGrid = document.querySelector('.service-grid');
    if (!videoGrid) return;

    let videoHTML = "";
    myVideos.forEach(video => {
        videoHTML += `
            <div class="service-card">
                <iframe width="100%" height="220" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
                <div style="padding: 15px;">
                    <h3 style="font-size: 1rem; color: #fff;">${video.title}</h3>
                    <p style="color: #ff3c3c; font-weight: bold; margin-top:5px;">CHANNEL: ${video.channel}</p>
                </div>
            </div>`;
    });
    videoGrid.innerHTML = videoHTML;
}

window.onload = loadVideos;
