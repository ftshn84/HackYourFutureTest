const openBtn = document.getElementById("openOverlay");
const closeBtn = document.getElementById("closeOverlay");
const overlay = document.getElementById("overlayPage");

openBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
