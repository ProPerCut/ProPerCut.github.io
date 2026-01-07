const cursor=document.getElementById("cursor")
const leftSound=new Audio("assets/sound/cut.mp3")
const rightSound=new Audio("assets/sound/right.mp3")

document.addEventListener("mousemove",e=>{
  gsap.to(cursor,{x:e.clientX,y:e.clientY,duration:.1})
})

document.addEventListener("mousedown",e=>{
  if(e.button===0){leftSound.play()}
  if(e.button===2){rightSound.play()}
})

/* typing */
const text="DOCUMENTARY & FACELESS VIDEO EDITOR"
let i=0
setInterval(()=>{
 document.querySelector(".typing").innerText=text.slice(0,i++)
 if(i>text.length)i=0
},120)
