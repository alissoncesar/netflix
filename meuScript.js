// meuScript.js

const input = document.getElementById('meuInput');

input.addEventListener('blur', () => {
  if (!input.value) {
    input.setCustomValidity('Este campo é obrigatório');
  } else {
    input.setCustomValidity('');
  }
});