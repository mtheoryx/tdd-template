import subject from './sandbox';

describe('Subject', () => {
  it('should return a function', () => {
    const actual = typeof subject;
    const expected = 'function'

    expect(actual).toEqual(expected);
  });

  it('should return true', () => {
    const actual = subject();
    const expected = true;

    expect(actual).toEqual(expected);
  });
});