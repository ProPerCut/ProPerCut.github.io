const cursor = document.getElementById('cursor');
const scissorsImg = document.getElementById('scissors');

// সাউন্ড পাথ
const leftClickSound = new Audio('assets/sound/cut.mp3');
const rightClickSound = new Audio('assets/sound/right.mp3');

document.addEventListener('mousemove', (e) => {
    // মাউস মুভমেন্ট
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });

    // হোভার ডিটেকশন: কোনো লিংকে বা বাটনে গেলে কাঁচি বড় হবে এবং টেক্সট বোল্ড হবে
    const target = e.target;
    if (target.closest('a, button, .logo, h1, h2, h3, p, span')) {
        cursor.classList.add('hover-active');
        if (target.tagName !== 'IFRAME') {
            target.style.fontWeight = "900";
            target.style.transition = "0.3s";
        }
    } else {
        cursor.classList.remove('hover-active');
        // সাধারণ অবস্থায় টেক্সট স্টাইল রিসেট
        document.querySelectorAll('a, button, h1, h2, h3, p, span').forEach(el => {
             if (!el.matches(':hover')) el.style.fontWeight = "";
        });
    }
});

// লেফট ক্লিক - কাট অ্যানিমেশন ও সাউন্ড
document.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        leftClickSound.currentTime = 0;
        leftClickSound.play().catch(() => {});
        
        // কাঁচি কাটার রিয়েলিস্টিক অ্যানিমেশন
        gsap.to(scissorsImg, { 
            scale: 0.6, 
            rotate: -40, 
            duration: 0.05,
            yoyo: true,
            repeat: 1 
        });
    }
});

document.addEventListener('mouseup', () => {
    gsap.to(scissorsImg, { scale: 1, rotate: 0, duration: 0.1 });
});

// রাইট ক্লিক - কাস্টম সাউন্ড ও ঝাকুনি
document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); 
    rightClickSound.currentTime = 0;
    rightClickSound.play().catch(() => {});
    gsap.to(scissorsImg, { x: 15, repeat: 5, yoyo: true, duration: 0.05, onComplete: () => gsap.set(scissorsImg, {x: 0}) });
});

// ভিডিও লোড করার ডাটা
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
