var findSymmetricalDifference = require('./findSymmetricalDifference.js');

describe('findSymmetricalDifference', () => {
  it('returns a new array', () => {
    expect(findSymmetricalDifference([2, 3, 4], [1, 2, 3])).toEqual([1, 4]);
  });
  it('returns unique numbers in an array', () => {
    expect(findSymmetricalDifference([1, 2, 3], [5, 2, 1, 4, 4])).toEqual([3, 4, 5]);
  });
  it('returns unique numbers in an array', () => {
    expect(findSymmetricalDifference([1, 2, 5], [2, 3, , 5, 5], [3, 4, 5])).toEqual([1, 4, 5]);
  });

});