document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("mySong");
  const anthemButton = document.getElementById("playAnthem");

  let isPlaying = false;

  anthemButton.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      anthemButton.textContent = "Play Anthem";
    } else {
      audio.muted = false;
      audio.volume = 1.0;
      audio.play().catch(err => console.error(err));
      isPlaying = true;
      anthemButton.textContent = "Pause Anthem";
    }
  });
});
