function encrypt() {
  const input = document.getElementById('input').value;
  const encrypted = btoa(unescape(encodeURIComponent(input)));
  document.getElementById('output').value = encrypted;
}

function decrypt() {
  try {
    const input = document.getElementById('input').value;
    const decrypted = decodeURIComponent(escape(atob(input)));
    document.getElementById('output').value = decrypted;
  } catch (e) {
    document.getElementById('output').value = 'Invalid encrypted text.';
  }
}
