import React from 'react';
import Fizz from '../../components/Fizz';
import Buzz from '../../components/Buzz';

const createFizzBuzzItems = fizzBuzzList => {
  const dayIndex = new Date().getDay();
  const props = { dayIndex };

  return fizzBuzzList.map((value, index) => {
    const key = value + index;

    switch (value) {
      case 'fizzbuzz':
        return (
          <React.Fragment key={key}>
            <Fizz {...props} />
            <Buzz {...props} />
          </React.Fragment>
        );
      case 'fizz':
        return <Fizz {...props} key={key} />;
      case 'buzz':
        return <Buzz {...props} key={key} />;
      default:
        return value;
    }
  });
};

export default createFizzBuzzItems;
