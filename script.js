document.addEventListener("DOMContentLoaded", () => {
  const anthemButton = document.getElementById("playAnthem");
  if (anthemButton) {
    anthemButton.addEventListener("click", () => {
      alert("Anthem clicked!");
    });
  }
});
