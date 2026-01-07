const cursor=document.getElementById("cursor")
const scissors=document.getElementById("scissors")
const cutSound=new Audio("assets/sound/cut.mp3")

document.addEventListener("mousemove",e=>{
  gsap.to(cursor,{x:e.clientX,y:e.clientY,duration:.1})
})

document.addEventListener("mousedown",()=>{
  cutSound.currentTime=0
  cutSound.play()
  gsap.fromTo(scissors,{scale:1},{scale:.6,repeat:1,yoyo:true})
})

const skills=["CRIME DOCUMENTARY","FACELESS AUTOMATION","SCIENCE EXPLAINER","MYSTERY STORIES"]
let i=0
setInterval(()=>{
  document.getElementById("skillText").innerText=skills[i++%skills.length]
},2500)

