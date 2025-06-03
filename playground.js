
import { classifyLite } from './classifyLite.js';

document.getElementById('checkButton').addEventListener('click', () => {
  const prompt = document.getElementById('promptInput').value;
  const result = classifyLite(prompt);

  document.getElementById('result').innerHTML = `
    <strong>Risikovurdering:</strong><br>
    Score: ${result.score}<br>
    Kategori: ${result.category}<br>
    Status: ${result.status}
  `;
});
