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

const buttons = document.querySelectorAll(".flip-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".flip-card");
    card.classList.toggle("flipped");
  });
});


