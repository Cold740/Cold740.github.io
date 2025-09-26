const button = document.getElementById("playAnthem");
const audio = document.getElementById("mySong");

button.addEventListener("click", () => {
  audio.muted = false;
  audio.volume = 1.0; 
  audio.play().catch(err => console.error("Play error:", err));
});
