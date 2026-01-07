const cursor = document.getElementById("cursor");
const scissor = document.getElementById("scissor");

const leftSound = new Audio("assets/sound/left.mp3");
const rightSound = new Audio("assets/sound/right.mp3");

document.addEventListener("mousemove", e => {
  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:.08,
    ease:"power2.out"
  });
});

/* LEFT CLICK */
document.addEventListener("mousedown", e=>{
  if(e.button===0){
    leftSound.currentTime=0;
    leftSound.play();
    gsap.fromTo(scissor,
      {scale:1},
      {scale:.7,rotate:-20,yoyo:true,repeat:1}
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
    {scale:.7,rotate:20,yoyo:true,repeat:1}
  );
});


/* typing */
const text="DOCUMENTARY & FACELESS VIDEO EDITOR"
let i=0
setInterval(()=>{
 document.querySelector(".typing").innerText=text.slice(0,i++)
 if(i>text.length)i=0
},120)
// NAV ITEM HOVER ANIMATION
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
