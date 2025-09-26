document.addEventListener("click", () => {
  audio.muted = false;
  audio.volume = 1.0;
  audio.play().catch(err => console.error(err));
}, { once: true });
