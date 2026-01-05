// ১. কাস্টম কাঁচি মাউস (Scissors Cursor) এবং সাউন্ড সেটআপ
const cursor = document.getElementById('cursor');
const scissorsImg = document.getElementById('scissors');

// সাউন্ড ফাইলগুলো লোড করা
const leftClickSound = new Audio('cut.mp3');
const rightClickSound = new Audio('right.mp3');

document.addEventListener('mousemove', (e) => {
    // মাউস নড়াচড়ার সাথে কাঁচি নড়বে
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// ২. লেফট ক্লিক অ্যানিমেশন ও সাউন্ড (cut.mp3)
document.addEventListener('mousedown', (e) => {
    if (e.button === 0) { // ০ মানে লেফট ক্লিক
        leftClickSound.play().catch(err => console.log("Audio play failed"));
        gsap.to(scissorsImg, {
            scale: 0.8,
            rotate: -30, // কাঁচি বন্ধ হওয়ার ভাব
            duration: 0.05
        });
    }
});

document.addEventListener('mouseup', () => {
    gsap.to(scissorsImg, {
        scale: 1,
        rotate: 0, // কাঁচি আবার খুলে যাওয়া
        duration: 0.1
    });
});

// ৩. রাইট ক্লিক সাউন্ড ও ঝাকুনি (right.mp3)
document.addEventListener('contextmenu', (e) => {
    rightClickSound.play().catch(err => console.log("Audio play failed"));
    // রাইট ক্লিক করলে কাঁচিটা একটু ঝাকুনি দিবে
    gsap.to(scissorsImg, {
        x: 10,
        repeat: 3,
        yoyo: true,
        duration: 0.05,
        onComplete: () => gsap.set(scissorsImg, {x: 0})
    });
});

// ৪. ইউটিউব ভিডিও ডাটা (আপনার এক্সেল ও চ্যানেলের সেরা কাজগুলো)
const myVideos = [
    { title: "Hells Angels Fear This Brutal Biker Gang", id: "bbC0Au4jAtE", channel: "DF" },
    { title: "King David's Palace Discovery", id: "9DSw3CVPC_I", channel: "HTU" },
    { title: "The Epic of Gilgamesh Mystery", id: "CVz1nDmI4Bc", channel: "TCM" },
    { title: "FOX Refused To Air This Episode", id: "jvw1vdVxaII", channel: "DF" },
    { title: "AI Just Opened Ancient Library", id: "8lrIFA3pWjw", channel: "UD" },
    { title: "The Most Dangerous Gangs in the World", id: "3f3_zS6uI2M", channel: "DF" },
    { title: "Lost Treasures of Ancient Egypt", id: "2N_LqJ_W8zQ", channel: "HTU" },
    { title: "Secret History of the Templars", id: "P_zS0OQ6U0A", channel: "TCM" },
    { title: "Why Modern Buildings Are So Ugly", id: "7X_u98mY-Gg", channel: "UD" },
    { title: "The Mystery of the Bermuda Triangle", id: "K9p9V-Q8_Gg", channel: "MP" }
];

// ৫. ভিডিওগুলো গ্রিডে লোড করার ফাংশন
function loadVideos() {
    const videoGrid = document.querySelector('.service-grid');
    if (!videoGrid) return;

    let videoHTML = "";
    myVideos.forEach(video => {
        videoHTML += `
            <div class="service-card">
                <iframe width="100%" height="220" 
                    src="https://www.youtube.com/embed/${video.id}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <div style="padding: 15px;">
                    <h3 style="font-size: 1rem; color: #fff; margin-bottom: 5px; height: 40px; overflow: hidden;">${video.title}</h3>
                    <p style="color: #ff3c3c; font-weight: bold; font-size: 0.8rem; letter-spacing: 1px;">CHANNEL: ${video.channel}</p>
                </div>
            </div>
        `;
    });
    videoGrid.innerHTML = videoHTML;
}

// ৬. ফর্ম সাবমিট হওয়ার পর সাকসেস মেসেজ দেখানো
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        setTimeout(() => {
            alert('Thank you, Hasan Abdullah! Your message has been sent successfully.');
            contactForm.reset(); 
        }, 1000);
    });
}

// ৭. পেজ লোড হলে ভিডিও ফাংশন রান করা
window.onload = loadVideos;
