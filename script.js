const cursor = document.getElementById("cursor");

// Sounds
const cutSound = new Audio("assets/sound/cut.mp3");

// Cursor follow (PC only)
if (cursor) {
  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.addEventListener("mousedown", () => {
    cutSound.currentTime = 0;
    cutSound.play();
    cursor.classList.add("cut");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("cut");
  });
}

// GSAP Cinematic Scroll
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-video", {
  scale: 1,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom+=200 top",
    scrub: true
  }
});

gsap.from(".hero-tag", {
  y: 30,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-title", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  delay: .2
});

gsap.from(".hero-desc, .btn", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: .4
});
// Case study video hover (PC only)
document.querySelectorAll(".case-media video").forEach(video => {
  video.parentElement.addEventListener("mouseenter", () => {
    video.play();
  });
  video.parentElement.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

// Scroll reveal for case cards
gsap.utils.toArray(".case-card").forEach(card => {
  gsap.from(card, {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    }
  });
});
// PROCESS PAGE SCROLL REVEAL
gsap.utils.toArray(".process-step").forEach((step, i) => {
  gsap.from(step, {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: i * 0.05,
    scrollTrigger: {
      trigger: step,
      start: "top 85%",
    }
  });
});
// CONTACT PAGE FADE IN
gsap.from(".contact-hero *", {
  y: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1
});

gsap.from(".form-step", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.12,
  delay: 0.4
});
/* ================= FINAL POLISH LOGIC ================= */

// CUSTOM CURSOR MOVE
const cursor = document.getElementById("cursor");

if(cursor){
  window.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });
}

// MICRO SCALE ON CLICK
document.querySelectorAll("a, button").forEach(el=>{
  el.addEventListener("mousedown",()=>{
    if(cursor) cursor.style.transform = "translate(-50%,-50%) scale(0.8)";
  });
  el.addEventListener("mouseup",()=>{
    if(cursor) cursor.style.transform = "translate(-50%,-50%) scale(1)";
  });
});

// SUBTLE PAGE LOAD FADE
gsap.from("body",{
  opacity:0,
  duration:0.8,
  ease:"power2.out"
});
function openVideo(link) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("player").src = link + "?autoplay=1";
}

function closeVideo() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("player").src = "";
}
document.querySelectorAll('.side-menu a').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
    .scrollIntoView({behavior:'smooth'});
  });
});
