const cursor = document.getElementById("cursor");
const cutSound = new Audio("assets/sound/cut.mp3");
const rightSound = new Audio("assets/sound/right.mp3");
const scrollSound = new Audio("assets/sound/scroll.mp3");

document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("mousedown", e=>{
  if(e.button===0){
    cutSound.currentTime=0;
    cutSound.play();
    cursor.classList.add("cut");
  }
});
document.addEventListener("mouseup", ()=>{
  cursor.classList.remove("cut");
});

document.addEventListener("contextmenu", e=>{
  e.preventDefault();
  rightSound.currentTime=0;
  rightSound.play();
});

window.addEventListener("wheel", ()=>{
  scrollSound.currentTime=0;
  scrollSound.play();
});
