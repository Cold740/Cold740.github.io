 const audio = document.getElementById("mySong");
  const button = document.getElementById("playAnthem");

  button.addEventListener("click", () => {
    audio.muted = false; 
    audio.volume = 1.0; 
    audio.play().catch(err => console.error("Play error:", err));
  });
