let audio = document.getElementById("mySong");
console.log("Muted:", audio.muted, "Volume:", audio.volume);
audio.muted = false;
audio.volume = 1.0;
