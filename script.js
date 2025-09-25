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
  document.querySelectorAll("[data-download]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.getAttribute("href");
      const filename = link.getAttribute("data-download") || "download.png";
      downloadFile(url, filename);
    });
  });
});
