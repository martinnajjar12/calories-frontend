import validValues from '../../utils/validValues';

const truthyValues = {
  first: 'foo',
  second: 'bar',
  third: 'foobar',
};

const falsyValues = {
  first: 'foo',
  second: 'bar',
  third: '',
};

describe('validValues function', () => {
  it('should return true when all the values are truty', () => {
    expect(validValues(truthyValues)).toBe(true);
  });

  it('should return false if any of the values are falsy', () => {
    expect(validValues(falsyValues)).toBe(false);
  });
});
