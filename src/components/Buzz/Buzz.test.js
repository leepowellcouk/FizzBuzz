import React from 'react';
import { render } from '@testing-library/react';
import Buzz from './Buzz';

describe('<Buzz />', () => {
  let rerender;
  let getByText;

  const createComponent = props => <Buzz {...props} />;
  const setProps = props => rerender(createComponent(props));

  beforeEach(() => {
    ({ rerender, getByText } = render(createComponent()));
  });

  describe('`dayIndex` prop', () => {
    it('should display `Buzz` by default', () => {
      expect(getByText('Buzz')).toBeInTheDocument();
    });

    it('should display `Wuzz` on Wednesdays', () => {
      const dayIndex = 3;
      setProps({ dayIndex });
      expect(getByText('Wuzz')).toBeInTheDocument();
    });
  });

  describe(`Pass through props`, () => {
    it('should spread all remaining props to component', () => {
      const title = 'Test';
      setProps({ title });
      expect(getByText('Buzz')).toHaveAttribute('title', title);
    });
  });
});
