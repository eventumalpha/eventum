function encryptMessage() {
  const message = document.getElementById("message").value;
  const key = document.getElementById("key").value;
  const output = document.getElementById("output");

  if (!message || !key) {
    output.value = "Please enter both a message and a key.";
    return;
  }

  let encrypted = '';
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    encrypted += String.fromCharCode(charCode);
  }

  output.value = btoa(encrypted);
}

function toggleBankMode() {
  document.body.classList.toggle("bank-mode");
}
