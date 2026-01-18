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

  const faqButton = document.getElementById('faq-button');
  const faqBox = document.getElementById('faq-box');
  const closeFaq = document.getElementById('close-faq');

  faqButton.addEventListener('click', () => {
    faqBox.style.display = 'block';
  });

  closeFaq.addEventListener('click', () => {
    faqBox.style.display = 'none';
  });
});
