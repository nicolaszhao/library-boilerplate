import assert from 'assert';
import WordConverter from '../src';

describe('#WordConverter', () => {
  const words = 'hello world';
  const wordConverter = new WordConverter(words);

  describe(`#new WordConverter('${words}')`, () => {
    it(`wordConverter.toUpperCase() should return ${words.toUpperCase()}`, () => {
      assert.strictEqual(wordConverter.toUpperCase(), words.toUpperCase());
    });

    it(`wordConverter.toLowerCase() should return ${words.toLowerCase()}`, () => {
      assert.strictEqual(wordConverter.toLowerCase(), words.toLowerCase());
    });
  });
});
