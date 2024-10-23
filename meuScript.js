// meuScript.js

const selectButton = document.querySelector('.custom-select');
const optionsList = document.querySelector('.options');
const arrow = document.querySelector('.arrow');

selectButton.addEventListener('click', () => {
  optionsList.classList.toggle('active');
  arrow.classList.toggle('rotated');
});