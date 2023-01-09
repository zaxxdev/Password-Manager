document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const decryptCheckbox = document.getElementById('decrypt');
  const encryptCheckbox = document.getElementById('encrypt');
  const passwordInput = document.getElementById('password');
  const resultInput = document.getElementById('result');
  const title = document.getElementById('title');
  var toggle = document.getElementById("switch-style");
  var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
  document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
      targetTheme = "dark";
  }

  document.documentElement.setAttribute('data-theme', targetTheme)
  localStorage.setItem('theme', targetTheme);
};
  // Funkcja szyfrująca hasło za pomocą klucza szyfrowania (Czeka na dokończenie)
  function encrypt(password) {
    return password
      .replace(/A/g, '@')
      .replace(/B/g, '2')
      .replace(/C/g, '5');
  }

  // Funkcja deszyfrująca hasło za pomocą klucza szyfrowania (Czeka na dokończenie)
  function decrypt(password) {
    return password
      .replace(/@/g, 'A')
      .replace(/2/g, 'B')
      .replace(/5/g, 'C');
  }

  // Domyślnie zaznacz checkbox "Szyfracja"
  decryptCheckbox.checked = true;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (decryptCheckbox.checked) {
      resultInput.value = decrypt(passwordInput.value);
    } else {
      resultInput.value = encrypt(passwordInput.value);
    }
  });

  // Zaznaczaj  jeden checkbox jednocześnie
  decryptCheckbox.addEventListener('change', function() {
    if (this.checked) {
      encryptCheckbox.checked = false;
      resultInput.value = '';
      title.textContent = 'Łamacz Haseł 🔓';
    }
  });

  encryptCheckbox.addEventListener('change', function() {
    if (this.checked) {
      decryptCheckbox.checked = false;
      resultInput.value = '';
      title.textContent = 'Szyfrowanie Haseł 🔐';
    }
  });
});