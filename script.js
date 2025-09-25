function downloadFile(url, filename) {
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".foto1 a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.getAttribute("href");
      const filename = url.split("/").pop() || "download.png";
      downloadFile(url, filename);
    });
  });
});
