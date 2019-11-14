const validate = (min, max) => ({ number }) => {
  const errors = {};
  if (number !== '') {
    if (number < min) {
      errors.number = `Please enter a value more than ${min}`;
    }
    if (number > max) {
      errors.number = `Please enter a value less than ${max}`;
    }
  }
  return errors;
};

export default validate;
