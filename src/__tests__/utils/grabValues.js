import grabValues from '../../utils/grabValues';

const testArray = [
  { id: 1, value: 3 },
  { id: 2, value: 4 },
  { id: 3, value: 5 },
  { id: 4, value: 6 },
];

describe('grabValues function', () => {
  it('should returns an array of the values only', () => {
    expect(grabValues(testArray)).toEqual([3, 4, 5, 6]);
  });
});
