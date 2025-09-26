const button = document.getElementById("playAnthem");
const audio = document.getElementById("mySong");

button.addEventListener("click", () => {
  audio.muted = false;   // unmute
  audio.volume = 1.0;    // ensure max volume

  if (audio.paused) {
    audio.play().catch(err => console.error("Play error:", err));
  } else {
    audio.pause();
  }
});
