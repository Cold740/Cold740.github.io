document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("mySong");

  document.addEventListener("click", () => {
    audio.muted = false;
    audio.volume = 1.0;
  }, { once: true });
});
