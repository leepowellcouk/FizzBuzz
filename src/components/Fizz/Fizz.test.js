import React from 'react';
import { render } from '@testing-library/react';
import Fizz from './Fizz';

describe('<Fizz />', () => {
  let rerender;
  let getByText;

  const createComponent = props => <Fizz {...props} />;
  const setProps = props => rerender(createComponent(props));

  beforeEach(() => {
    ({ rerender, getByText } = render(createComponent()));
  });

  describe('`dayIndex` prop', () => {
    it('should display `Fizz` by default', () => {
      expect(getByText('Fizz')).toBeInTheDocument();
    });

    it('should display `Wuzz` on Wednesdays', () => {
      setProps({ dayIndex: 3 });
      expect(getByText('Wizz')).toBeInTheDocument();
    });
  });

  describe(`Pass through props`, () => {
    it('should spread all remaining props to component', () => {
      const title = 'Test';
      setProps({ title });
      expect(getByText('Fizz')).toHaveAttribute('title', title);
    });
  });
});
