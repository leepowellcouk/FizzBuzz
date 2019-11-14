const createNumberArray = (number, offset = 1) =>
  Array(number)
    .fill(undefined)
    .map((val, index) => index + offset);

export default createNumberArray;
