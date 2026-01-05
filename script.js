const cursor = document.getElementById("cursor");

// Custom Sounds
const cutSound = new Audio("assets/sound/cut.mp3");

// Cursor Follow
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Left Click = cut
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

// Typing Animation
const typedText = document.getElementById("typed-text");
const texts = [
  "Professional Video Editor",
  "YouTube Automation Expert",
  "Cinematic Editing",
  "Faceless Content Creator"
];
let textIndex=0;
let charIndex=0;

function typeWriter(){
  if(charIndex<texts[textIndex].length){
    typedText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter,100);
  }else{
    setTimeout(eraseText,1500);
  }
}
function eraseText(){
  if(charIndex>0){
    typedText.textContent = texts[textIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(eraseText,50);
  }else{
    textIndex = (textIndex+1)%texts.length;
    setTimeout(typeWriter,500);
  }
}
typeWriter();
