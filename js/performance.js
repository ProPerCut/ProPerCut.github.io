/* =========================
   PERFORMANCE OPTIMIZER
========================= */

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isMobile) {
  // Disable custom cursor
  const cursor = document.getElementById("cursor");
  if (cursor) cursor.style.display = "none";

  // Disable sounds
  document.querySelectorAll("audio").forEach(a => {
    a.muted = true;
  });

  // Reduce animation intensity
  document.body.classList.add("mobile");
}

