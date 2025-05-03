function encryptMessage() {
  const msg = document.getElementById("message").value;
  if (!msg.trim()) {
    alert("Please enter a message.");
    return;
  }
  const encrypted = btoa(unescape(encodeURIComponent(msg)));
  document.getElementById("output-box").innerText = `Encrypted Message:\n${encrypted}`;
}

function toggleBankMode() {
  const body = document.body;
  const isBankMode = document.getElementById("bankModeToggle").checked;
  body.classList.toggle("bank-mode", isBankMode);
  if (isBankMode) {
    document.body.style.background = "#000";
    document.body.style.color = "#0f0";
  } else {
    document.body.style.background = "#0f0f1a";
    document.body.style.color = "#e3e3e3";
  }
}
