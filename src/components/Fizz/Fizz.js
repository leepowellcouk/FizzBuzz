import React from 'react';
import { range } from 'airbnb-prop-types';

const text = {
  3: 'Wizz',
};

const Fizz = ({ className, dayIndex, ...props }) => (
  <span {...props} className="fizz">
    {text[dayIndex] || 'Fizz'}
  </span>
);

Fizz.displayName = 'Fizz';

Fizz.defaultProps = {
  dayIndex: 0,
};

Fizz.propTypes = {
  dayIndex: range(0, 6),
};

export default Fizz;
