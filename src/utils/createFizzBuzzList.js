import createNumberArray from './createNumberArray';

const createFizzBuzzList = number =>
  createNumberArray(number).map(number => {
    if (number % 15 === 0) {
      return 'fizzbuzz';
    }
    if (number % 5 === 0) {
      return 'buzz';
    }
    if (number % 3 === 0) {
      return 'fizz';
    }
    return number;
  });

export default createFizzBuzzList;
