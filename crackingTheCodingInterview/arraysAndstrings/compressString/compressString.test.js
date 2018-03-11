'use strict';
const compressString = require(`./compressString`);

describe(`compressString`, () => {
  test(`compressString should return the original string if the compressed version would be longer`, () => {
    expect(compressString('banana')).toEqual('banana');
  });

  test(`compressString should return the compressed version if it is shorter than the original`, () => {
    expect(compressString('aaaabbbbbbbbbbbbaaacccd')).toEqual('a4b12a3c3d1');
  });
});
