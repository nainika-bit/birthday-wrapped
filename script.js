function replay() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");
  heart.className = "cursor-heart";
  heart.innerText = "♡";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});
