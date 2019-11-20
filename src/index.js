export default class WordConverter {
  constructor(word) {
    this.word = word;
  }

  toUpperCase() {
    return this.word.toUpperCase();
  }

  toLowerCase() {
    return this.word.toLowerCase();
  }
}
