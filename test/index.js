const assert = require('assert');
const { hello, world } = require('../src');

describe('#src/index.js', () => {
  describe('#hello()', () => {
    it('hello() should return "hello"', () => {
      assert.strictEqual(hello(), "hello");
    });
  });

  describe('#world()', () => {
    it('world() should return "world"', () => {
      assert.strictEqual(world(), "world");
    })
  });
});
