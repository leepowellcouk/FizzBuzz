import React from 'react';
import { range } from 'airbnb-prop-types';

const text = {
  3: 'Wuzz',
};

const Buzz = ({ className, dayIndex, ...props }) => (
  <span {...props} className="buzz" data-testid="buzz">
    {text[dayIndex] || 'Buzz'}
  </span>
);

Buzz.displayName = 'Buzz';

Buzz.defaultProps = {
  dayIndex: 0,
};

Buzz.propTypes = {
  dayIndex: range(0, 6),
};

export default Buzz;
