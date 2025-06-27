const touch = document.getElementById("touch");
const gucciText = document.querySelector("#one h2");
const hero = document.getElementById("hero");

// Smooth transition setup
gucciText.style.transition = "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
gucciText.style.willChange = "transform, font-size, color";

// Animate only if the hovered element is NOT inside navbar
touch.addEventListener("mouseenter", (e) => {
  if (e.target.closest("#hero")) return; // skip animation if inside navbar

  // Animate gucci text
  gucciText.style.transform = "translateY(200px) scale(1.8)";
  gucciText.style.fontSize = "170px";
  gucciText.style.color = "white";
  gucciText.style.fontWeight = "800";
  gucciText.style.letterSpacing = "5px";

  setTimeout(() => {
    gucciText.style.transform = "translateY(0) scale(1)";
    gucciText.style.fontSize = "35px";
    gucciText.style.color = "black";
    gucciText.style.fontWeight = "600";
    gucciText.style.letterSpacing = "normal";
  }, 3000);
});


function setupVideoToggle(videoId, btnId) {
  const video = document.getElementById(videoId);
  const btn = document.getElementById(btnId);
  const playIcon = btn.querySelector(".play-icon");
  const pauseIcon = btn.querySelector(".pause-icon");

  btn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playIcon.style.display = "none";
      pauseIcon.style.display = "inline";
    } else {
      video.pause();
      pauseIcon.style.display = "none";
      playIcon.style.display = "inline";
    }
  });
}

// Setup for all three videos
setupVideoToggle("video1", "btn1");
setupVideoToggle("video2", "btn2");
setupVideoToggle("video3", "btn3");

const jumpElements = document.querySelectorAll(".jump");

  window.addEventListener("scroll", () => {
    jumpElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.7;
      if (rect.top < triggerPoint) {
        element.classList.add("scrolled");
      } else {
        element.classList.remove("scrolled");
      }
    });
  });