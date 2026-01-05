// ১. কাস্টম কাঁচি মাউস (Scissors Cursor) কন্ট্রোল
const cursor = document.getElementById('cursor');
const scissorsImg = document.getElementById('scissors');

document.addEventListener('mousemove', (e) => {
    // মাউস নড়াচড়ার সাথে কাঁচি নড়বে
    gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.1
    });
});

// ২. মাউস ক্লিক করলে কাঁচি কাটার (Cut) অ্যানিমেশন
document.addEventListener('mousedown', () => {
    gsap.to(scissorsImg, {
        scale: 0.8,
        rotate: -20, // কাঁচি বন্ধ হওয়ার ভাব
        duration: 0.1
    });
});

document.addEventListener('mouseup', () => {
    gsap.to(scissorsImg, {
        scale: 1,
        rotate: 0, // কাঁচি আবার খুলে যাওয়া
        duration: 0.1
    });
});

// ৩. ইউটিউব ভিডিও ডাটা (আপনার সেরা কাজগুলো)
const myVideos = [
    { title: "Hells Angels Fear This Brutal Biker Gang", id: "bbC0Au4jAtE", channel: "DF" },
    { title: "King David's Palace Discovery", id: "9DSw3CVPC_I", channel: "HTU" },
    { title: "The Epic of Gilgamesh Mystery", id: "CVz1nDmI4Bc", channel: "TCM" },
    { title: "FOX Refused To Air This Episode", id: "jvw1vdVxaII", channel: "DF" },
    { title: "AI Just Opened Ancient Library", id: "8lrIFA3pWjw", channel: "UD" }
];

// ৪. ভিডিওগুলো গ্রিডে লোড করার ফাংশন
function loadVideos() {
    const videoGrid = document.querySelector('.service-grid');
    if (!videoGrid) return;

    let videoHTML = "";
    myVideos.forEach(video => {
        videoHTML += `
            <div class="service-card">
                <iframe width="100%" height="200" 
                    src="https://www.youtube.com/embed/${video.id}" 
                    frameborder="0" allowfullscreen>
                </iframe>
                <h3 style="margin-top:15px; font-size:1.1rem; color:#fff;">${video.title}</h3>
                <p style="color:#888;">Channel: ${video.channel}</p>
            </div>
        `;
    });
    videoGrid.innerHTML = videoHTML;
}

// ৫. ফর্ম সাবমিট হওয়ার পর মেসেজ দেখানো
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // ফর্মটি Formspree তে সাবমিট হতে দিন
        // আমরা শুধু ইউজারকে একটি কনফার্মেশন দিবো
        setTimeout(() => {
            alert('ধন্যবাদ হাসান ভাই! আপনার মেসেজটি ইমেইলে পাঠিয়ে দেওয়া হয়েছে।');
            contactForm.reset(); // ফর্ম খানি করে দেওয়া
        }, 1000);
    });
}

// ৬. পেজ লোড হলে ভিডিও ফাংশন রান করা
window.onload = loadVideos;
