function encrypt() {
  const input = document.getElementById("inputText").value;
  if (!input.trim()) {
    alert("Please enter a message to encrypt.");
    return;
  }

  // Basic mock encryption using Base64 + simple salt
  const salt = "eventum2025";
  const salted = salt + input + salt;
  const encrypted = btoa(salted); // Encode to base64
  document.getElementById("outputText").value = encrypted;
}
