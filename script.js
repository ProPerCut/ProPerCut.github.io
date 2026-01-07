/* CINEMATIC LOADER SOUND */
function cinematicSound(){
  const ctx = new (window.AudioContext||window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type="sawtooth";
  osc.frequency.value=120;
  gain.gain.value=0.001;

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime+.3);
  osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime+1);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+1.2);
  osc.stop(ctx.currentTime+1.3);
}

const cursor = document.getElementById("cursor");
const scissor = document.getElementById("scissor");

/* cursor glow */
const glow = document.getElementById("cursor-glow");

const leftSound = new Audio("assets/sound/left.mp3");
const rightSound = new Audio("assets/sound/right.mp3");

/* ================= MOUSE MOVE ================= */
let lastX = window.innerWidth / 2;
let lastY = window.innerHeight / 2;

document.addEventListener("mousemove", e => {

  /* cursor follow */
  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:.08,
    ease:"power2.out"
  });

  /* glow follow */
  if(glow){
    gsap.to(glow,{
      x:e.clientX,
      y:e.clientY,
      duration:.3,
      ease:"power2.out"
    });
  }

  /* scissor direction rotate */
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;

  gsap.to(scissor,{
    rotate: angle,
    duration:.15,
    ease:"power2.out"
  });

  lastX = e.clientX;
  lastY = e.clientY;
});

/* LEFT CLICK */
document.addEventListener("mousedown", e=>{
  if(e.button===0){
    leftSound.currentTime=0;
    leftSound.play();
    gsap.fromTo(scissor,
      {scale:1},
      {scale:.7,rotate:-20,yoyo:true,repeat:1,duration:.15}
    );
  }
});

/* RIGHT CLICK */
document.addEventListener("contextmenu", e=>{
  e.preventDefault();
  rightSound.currentTime=0;
  rightSound.play();
  gsap.fromTo(scissor,
    {scale:1},
    {scale:.7,rotate:20,yoyo:true,repeat:1,duration:.15}
  );
});

/* HOVER EFFECT FOR SCISSOR */
document.querySelectorAll("a, button, .logo, .service-card, .portfolio-card").forEach(el=>{
  el.addEventListener("mouseenter",()=>{
    gsap.to(scissor,{
      scale:1.6,
      rotate:-45,
      duration:.25,
      ease:"power3.out"
    });
    scissor.style.stroke="#00ffcc";
    scissor.style.filter="drop-shadow(0 0 12px #00ffcc)";
  });

  el.addEventListener("mouseleave",()=>{
    gsap.to(scissor,{
      scale:1,
      duration:.25,
      ease:"power3.out"
    });
    scissor.style.stroke="#ff3c3c";
    scissor.style.filter="drop-shadow(0 0 6px #ff3c3c)";
  });
});

/* typing (static) */
const text="DOCUMENTARY & FACELESS VIDEO EDITOR";
let i=0;
setInterval(()=>{
 document.querySelector(".typing").innerText=text.slice(0,i++);
 if(i>text.length)i=0;
},120);

/* NAV ITEM HOVER ANIMATION */
document.querySelectorAll(".nav-item").forEach(item=>{
  item.addEventListener("mouseenter",()=>{
    gsap.to(item,{scale:1.1,duration:.2});
  });
  item.addEventListener("mouseleave",()=>{
    gsap.to(item,{scale:1,duration:.2});
  });
});

/* SMOOTH SCROLL */
document.querySelectorAll(".nav-item").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    const target=document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({behavior:"smooth"});
  });
});

/* TYPING EFFECT (animated) */
const typingTexts = [
  "FACELESS VIDEO EDITOR",
  "CRIME DOCUMENTARY EDITOR",
  "RETENTION STORYTELLER"
];

let typingIndex = 0;
let charIndex = 0;
let typingEl = document.getElementById("typingText");

function typeEffect(){
  if(charIndex < typingTexts[typingIndex].length){
    typingEl.textContent += typingTexts[typingIndex][charIndex];
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1800);
  }
}

function eraseEffect(){
  if(charIndex > 0){
    typingEl.textContent = typingTexts[typingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    typingIndex = (typingIndex + 1) % typingTexts.length;
    setTimeout(typeEffect, 300);
  }
}

typingEl.textContent="";
typeEffect();

/* HERO LOAD ANIMATION */
gsap.from(".hero-image-wrap img",{
  x:-80,
  opacity:0,
  duration:1.2,
  ease:"power3.out"
});

gsap.from(".hero-text > *",{
  y:40,
  opacity:0,
  duration:1,
  stagger:.15,
  delay:.4,
  ease:"power3.out"
});

/* SERVICES HOVER ANIMATION */
document.querySelectorAll(".service-card").forEach(card=>{
  card.addEventListener("mouseenter",()=>{
    gsap.to(card.querySelector(".service-icon"),{
      scale:1.3,
      rotate:6,
      duration:.3,
      ease:"power3.out"
    });
  });

  card.addEventListener("mouseleave",()=>{
    gsap.to(card.querySelector(".service-icon"),{
      scale:1,
      rotate:0,
      duration:.3,
      ease:"power3.out"
    });
  });
});

/* PORTFOLIO SCROLL */
gsap.from(".portfolio-card",{
  scrollTrigger:{
    trigger:"#portfolio",
    start:"top 80%"
  },
  y:60,
  opacity:0,
  stagger:.15,
  duration:1,
  ease:"power3.out"
});

/* SOCIAL HOVER */
document.querySelectorAll(".contact-social a").forEach(box=>{
  box.addEventListener("mouseenter",()=>{
    gsap.to(box,{y:-12,scale:1.05,duration:.3});
  });
  box.addEventListener("mouseleave",()=>{
    gsap.to(box,{y:0,scale:1,duration:.3});
  });
});

/* LOGO AUTO ROTATE */
gsap.to(".logo-icon",{
  rotate:360,
  duration:6,
  repeat:-1,
  ease:"linear"
});

/* LOADER EXIT */
window.addEventListener("load",()=>{
  cinematicSound();

  gsap.to("#loader",{
    yPercent:-100,
    delay:1.6,
    duration:1.2,
    ease:"power4.inOut",
    onComplete:()=>document.getElementById("loader").remove()
  });
});
gsap.from(".service-card",{
  scrollTrigger:{
    trigger:"#services",
    start:"top 70%"
  },
  y:40,
  opacity:0,
  duration:.8,
  stagger:.25,
  ease:"power3.out"
});
