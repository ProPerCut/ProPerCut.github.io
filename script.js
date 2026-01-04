const cursor = document.querySelector("#cursor");

const leftSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-metal-hit-1930.mp3");
const rightSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-click-error-1110.mp3");
const scrollSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-fast-small-sweep-transition-166.mp3");

/* CURSOR MOVE */
document.addEventListener("mousemove", e=>{
  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:0
  });
});

/* LEFT CLICK */
document.addEventListener("mousedown",()=>{
  leftSound.play();
  gsap.to(cursor,{scale:0.7,rotate:-90,duration:0.05});
});

/* RIGHT CLICK */
document.addEventListener("contextmenu",e=>{
  e.preventDefault();
  rightSound.play();
});

/* RELEASE */
document.addEventListener("mouseup",()=>{
  gsap.to(cursor,{scale:1,rotate:-135,duration:0.05});
});

/* SCROLL */
window.addEventListener("wheel",()=>{
  scrollSound.play();
});

/* ENTRANCE ANIMATION */
gsap.from("header",{y:-60,opacity:0,duration:1});
gsap.from(".hero-img",{x:-120,opacity:0,duration:1});
gsap.from(".hero-text>*",{x:120,opacity:0,stagger:0.2,duration:1});
/* ===== PORTFOLIO FILTER ===== */

const filterBtns = document.querySelectorAll(".portfolio-filter button");
const cards = document.querySelectorAll(".portfolio-card");

filterBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    filterBtns.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card=>{
      if(filter==="all" || card.classList.contains(filter)){
        card.style.display="block";
        gsap.from(card,{opacity:0,y:30,duration:0.4});
      }else{
        card.style.display="none";
      }
    });
  });
});
/* ===== ABOUT PAGE ANIMATION ===== */

gsap.from(".about-tag",{opacity:0,y:-20,duration:1});
gsap.from(".about-name",{opacity:0,x:-60,duration:1,delay:0.2});
gsap.from(".about-desc",{opacity:0,x:-60,duration:1,delay:0.4});
gsap.from(".stat",{opacity:0,y:30,stagger:0.2,delay:0.6});
gsap.from(".skills-box",{opacity:0,x:60,duration:1,delay:0.5});
