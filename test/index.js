import assert from 'assert';
import { helloWorld } from '../src';

describe('#src/index.js', () => {
  describe('#helloWorld()', () => {
    it('helloWorld() should return "Hello world!"', () => {
      assert.strictEqual(helloWorld(), "Hello world!");
    });
  });
});
