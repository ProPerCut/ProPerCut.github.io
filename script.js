const cursor = document.getElementById("cursor");
const scissor = document.getElementById("scissor");

document.addEventListener("mousemove", e=>{
  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:.08
  });
});

/* TYPING EFFECT */
const texts=[
  "FACELESS VIDEO EDITOR",
  "CRIME DOCUMENTARY EDITOR",
  "RETENTION STORYTELLER"
];
let t=0,c=0;
const el=document.getElementById("typingText");

function type(){
  if(c<texts[t].length){
    el.textContent+=texts[t][c++];
    setTimeout(type,80);
  }else{
    setTimeout(erase,1500);
  }
}
function erase(){
  if(c>0){
    el.textContent=texts[t].slice(0,--c);
    setTimeout(erase,50);
  }else{
    t=(t+1)%texts.length;
    setTimeout(type,300);
  }
}
type();

/* LOADER */
window.addEventListener("load",()=>{
  gsap.to("#loader",{
    yPercent:-100,
    duration:1.2,
    onComplete:()=>{
      document.body.classList.add("loaded");
      document.getElementById("loader").remove();
    }
  });
});
