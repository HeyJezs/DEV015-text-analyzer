import analyzer from './analyzer.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputTextArea = document.querySelector('textarea');
  const resetButton = document.getElementById('reset-button');
  const listItems = document.querySelectorAll('ul li');

  const updateMetrics = (text) => {
    listItems[0].textContent = `Palabras: ${analyzer.getWordCount(text)}`;
    listItems[1].textContent = `Caracteres: ${analyzer.getCharacterCount(text)}`;
    listItems[2].textContent = `Caracteres sin espacios: ${analyzer.getCharacterCountExcludingSpaces(text)}`;
    listItems[3].textContent = `Números: ${analyzer.getNumberCount(text)}`;
    listItems[4].textContent = `Suma de números: ${analyzer.getNumberSum(text)}`;
    listItems[5].textContent = `Promedio longitud: ${analyzer.getAverageWordLength(text)}`;
  };

  inputTextArea.addEventListener('input', () => {
    const inputText = inputTextArea.value;
    updateMetrics(inputText);
  });

  resetButton.addEventListener('click', () => {
    inputTextArea.value = ''; 
    updateMetrics('');
  });

  // Inicia las metricas con una cadena vacia para borrar todas las metricas
  updateMetrics('');
});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`