const analyzer = {
  getWordCount: (text) => {
    text = text.trim();
    if (text === '') {
      return 0;
    }
    const words = text.split(/\s+/).filter(word => word !== '');
    return words.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[\W\s_]/g, '').length;
  },
  getAverageWordLength: (text) => {
    const words = text.split(" ");
    if (!words) return 0;
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    return words.length ? parseFloat((totalLength / words.length).toFixed(2)) : 0;
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers !== null) {
      return numbers.length;
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers === null) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += parseFloat(numbers[i]);
    }
    return sum;
  },
};
export default analyzer;
//TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.