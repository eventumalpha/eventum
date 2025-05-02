// Preloader + Show Main
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
  document.querySelector('.hero').style.display = 'block';
});

// Sound Toggle
const soundToggle = document.getElementById('soundToggle');
const ambient = document.getElementById('ambient');
soundToggle.addEventListener('change', () => {
  soundToggle.checked ? ambient.play() : ambient.pause();
});

// Playground Encryption Logic
const bankToggle = document.getElementById('bankToggle');
function encrypt() {
  const text = document.getElementById('input').value;
  // Dummy reverse + base64
  let encrypted = btoa(text.split('').reverse().join(''));
  if (bankToggle && bankToggle.checked) {
    encrypted = 'BANK:' + btoa(encrypted);
  }
  document.getElementById('output').innerText = encrypted;

  // Live flow animation
  const flow = document.getElementById('flow');
  flow.classList.add('active');
  setTimeout(() => flow.classList.remove('active'), 800);
}
