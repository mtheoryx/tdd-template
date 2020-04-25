import subject from './sandbox';

describe('Subject', () => {
  it('should return a function', () => {
    const actual = typeof subject;
    const expected = 'function'

    expect(actual).toEqual(expected);
  });
});