const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const days = Number(document.getElementById('days').value);
  const seconds = days * 86400;

  result.textContent = `Количество секунд: ${seconds}`;
});