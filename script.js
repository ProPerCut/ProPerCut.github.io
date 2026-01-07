gsap.registerPlugin(ScrollTrigger);

/* LOADER SOUND */
function cinematicSound(){
  const ctx=new(window.AudioContext||window.webkitAudioContext)();
  const osc=ctx.createOscillator();
  const gain=ctx.createGain();
  osc.type="sawtooth";
  osc.frequency.value=120;
  gain.gain.value=0.001;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.3,ctx.currentTime+.3);
  osc.frequency.exponentialRampToValueAtTime(40,ctx.currentTime+1);
  gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+1.2);
  osc.stop(ctx.currentTime+1.3);
}

/* CURSOR */
const cursor=document.getElementById("cursor");
const scissor=document.getElementById("scissor");

document.addEventListener("mousemove",e=>{
  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:.08
  });
});

/* TYPING */
const texts=[
  "FACELESS DOCUMENTARY EDITOR",
  "RETENTION STORYTELLER",
  "CINEMATIC VIDEO CREATOR"
];
let ti=0,ci=0;
const typing=document.getElementById("typingText");

function type(){
  if(ci<texts[ti].length){
    typing.textContent+=texts[ti][ci++];
    setTimeout(type,80);
  }else{
    setTimeout(erase,1500);
  }
}
function erase(){
  if(ci>0){
    typing.textContent=texts[ti].substring(0,--ci);
    setTimeout(erase,40);
  }else{
    ti=(ti+1)%texts.length;
    setTimeout(type,200);
  }
}
type();

/* HERO ANIMATION */
gsap.from(".hero-image-wrap img",{x:-80,opacity:0,duration:1});
gsap.from(".hero-text > *",{y:40,opacity:0,stagger:.15,duration:1});

/* SERVICES */
gsap.from(".service-card",{
  scrollTrigger:{
    trigger:"#services",
    start:"top 75%"
  },
  y:50,
  opacity:0,
  stagger:.2
});

/* PORTFOLIO */
gsap.from(".portfolio-card",{
  scrollTrigger:{
    trigger:"#portfolio",
    start:"top 80%"
  },
  y:50,
  opacity:0,
  stagger:.2
});

/* LOADER EXIT */
window.addEventListener("load",()=>{
  cinematicSound();
  gsap.to("#loader",{
    yPercent:-100,
    duration:1.2,
    ease:"power4.inOut",
    onComplete:()=>document.getElementById("loader").remove()
  });
});
