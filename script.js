const cursor = document.querySelector('#cursor');

// ===== SOUNDS =====
const cutSound = new Audio('./assets/sound/cut.mp3');
const rightSound = new Audio('./assets/sound/right.mp3');
const scrollSound = new Audio('./assets/sound/scroll.mp3');

cutSound.volume = 0.6;
rightSound.volume = 0.6;
scrollSound.volume = 0.3;

// ===== MOUSE MOVE =====
document.addEventListener('mousemove', e => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0
  });
});

// ===== LEFT CLICK (CUT) =====
document.addEventListener('mousedown', e => {
  if (e.button === 0) {
    cutSound.currentTime = 0;
    cutSound.play();

    gsap.to(cursor, {
      rotate: -90,
      scale: 0.8,
      duration: 0.08
    });

    createSpark(e.clientX, e.clientY);
  }
});

// ===== RELEASE =====
document.addEventListener('mouseup', () => {
  gsap.to(cursor, {
    rotate: -135,
    scale: 1,
    duration: 0.1
  });
});

// ===== RIGHT CLICK =====
document.addEventListener('contextmenu', e => {
  e.preventDefault();
  rightSound.currentTime = 0;
  rightSound.play();

  gsap.to(cursor, {
    scale: 1.4,
    color: '#ff00ff',
    duration: 0.2
  });

  setTimeout(() => {
    gsap.to(cursor, {
      scale: 1,
      color: '#00ffff',
      duration: 0.2
    });
  }, 200);
});

// ===== SCROLL SOUND =====
let scrollTimeout;
window.addEventListener('wheel', () => {
  scrollSound.currentTime = 0;
  scrollSound.play();

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    scrollSound.pause();
  }, 120);
});

// ===== HOVER MAGNETIC =====
document.querySelectorAll('a, button, .nav-btn').forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to(cursor, { scale: 1.6, duration: 0.2 });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(cursor, { scale: 1, duration: 0.2 });
  });
});

// ===== SPARK EFFECT =====
function createSpark(x, y) {
  for (let i = 0; i < 6; i++) {
    const spark = document.createElement('div');
    spark.className = 'spark';
    document.body.appendChild(spark);

    spark.style.left = x + 'px';
    spark.style.top = y + 'px';

    gsap.to(spark, {
      x: (Math.random() - 0.5) * 120,
      y: (Math.random() - 0.5) * 120,
      opacity: 0,
      scale: 0,
      duration: 0.6,
      onComplete: () => spark.remove()
    });
  }
}
