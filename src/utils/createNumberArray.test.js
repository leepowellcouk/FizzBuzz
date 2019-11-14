import createNumberArray from './createNumberArray';

describe('createNumberArray', () => {
  const length = 50;
  let arr;

  beforeEach(() => {
    arr = createNumberArray(length);
  });

  it('should return array', () => {
    expect(Array.isArray(arr)).toBeTruthy();
  });

  it(`should contain ${length} results`, () => {
    expect(arr.length).toEqual(length);
  });

  it('should contain only numbers', () => {
    expect(arr.every(item => Number.isInteger(item))).toBeTruthy();
  });

  it('should increment numbers by 1', () => {
    const result = arr.reduce((prev, curr) => {
      if (prev === false) {
        return prev;
      }
      return prev + 1 === curr ? curr : false;
    }, 0);
    expect(result).toBeTruthy();
  });

  it('should have a default offset of 1', () => {
    expect(arr[0]).toEqual(1);
  });

  it('should offset by specfied amount', () => {
    arr = createNumberArray(length, 5);
    expect(arr[0]).toEqual(5);
  });
});
