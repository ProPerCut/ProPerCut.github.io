// ১. কাস্টম কাঁচি মাউস কন্ট্রোল
const cursor = document.getElementById('cursor');
const scissorsImg = document.getElementById('scissors');

document.addEventListener('mousemove', (e) => {
    // মাউসের পজিশন অনুযায়ী কাঁচি নড়বে
    gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.1
    });
});

// ২. ক্লিক করলে কাঁচি কাটার (Cut) অ্যানিমেশন
document.addEventListener('mousedown', () => {
    gsap.to(scissorsImg, {
        scale: 0.8,
        rotate: -15,
        duration: 0.1
    });
});

document.addEventListener('mouseup', () => {
    gsap.to(scissorsImg, {
        scale: 1,
        rotate: 0,
        duration: 0.1
    });
});

// ৩. ইউটিউব ভিডিও ডাটা (আপনার এক্সেল ফাইল থেকে নেওয়া)
const myVideos = [
    { title: "Hells Angels Fear This Brutal Biker Gang", id: "bbC0Au4jAtE", channel: "DF" },
    { title: "King David's Palace Discovery", id: "9DSw3CVPC_I", channel: "HTU" },
    { title: "The Epic of Gilgamesh Mystery", id: "CVz1nDmI4Bc", channel: "TCM" },
    { title: "FOX Refused To Air This Episode", id: "jvw1vdVxaII", channel: "DF" },
    { title: "AI Just Opened Ancient Library", id: "8lrIFA3pWjw", channel: "UD" }
];

// ৪. পোর্টফোলিও গ্রিডে ভিডিও ইনজেক্ট করা
const videoGrid = document.querySelector('.service-grid'); // এখানে আপনার ভিডিওগুলো দেখাবে

// এই ফাংশনটি আপনার ভিডিওগুলোকে সুন্দরভাবে সাজাবে
function loadVideos() {
    let videoHTML = "";
    myVideos.forEach(video => {
        videoHTML += `
            <div class="service-card" style="cursor:none;">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
                <h3 style="margin-top:15px; font-size:1.1rem;">${video.title}</h3>
                <p style="color:#888;">Channel: ${video.channel}</p>
            </div>
        `;
    });
    // ভিডিও গ্রিড যদি index.html এ থাকে তবে এটি কাজ করবে
    if(videoGrid) videoGrid.innerHTML = videoHTML;
}

window.onload = loadVideos;

// ৫. কন্টাক্ট ফরম সাবমিশন হ্যান্ডলার
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // ডাটা সেভ করার সিস্টেম (আপাতত লোকাল স্টোরেজে রাখছি যাতে আপনি দেখতে পারেন)
    let submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    submissions.push(data);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));

    alert('ধন্যবাদ হাসান ভাই! আপনার ক্লায়েন্টের তথ্য সেভ করা হয়েছে। আপনি এডমিন পেজে এটি দেখতে পাবেন।');
    contactForm.reset();
});
