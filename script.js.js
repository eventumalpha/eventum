window.addEventListener('load', () => {
  document.querySelector('.preloader').style.display = 'none';
});

const toggle = document.getElementById("soundToggle");
const audio = document.getElementById("ambient");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    audio.play();
  } else {
    audio.pause();
  }
});
