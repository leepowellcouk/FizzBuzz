import createFizzBuzzList from './createFizzBuzzList';

describe('createFizzBuzzList', () => {
  const length = 50;
  let list;

  beforeEach(() => {
    list = createFizzBuzzList(length);
  });

  it('should return array', () => {
    expect(Array.isArray(list)).toBeTruthy();
  });

  it(`should contain ${length} results`, () => {
    expect(list.length).toEqual(length);
  });

  it('should contain `fizz` at result 3', () => {
    expect(list[2]).toEqual('fizz');
  });

  it('should contain `buzz` at result 5', () => {
    expect(list[4]).toEqual('buzz');
  });

  it('should contain `fizzbuzz` at result 15', () => {
    expect(list[14]).toEqual('fizzbuzz');
  });

  it('should contain numbers for all other results', () => {
    const filteredList = list.filter(
      item => ['fizz', 'buzz', 'fizzbuzz'].includes(item) === false
    );
    expect(filteredList.every(item => Number.isInteger(item))).toBeTruthy();
  });
});
