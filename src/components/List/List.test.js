import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

const renderComponent = props => render(<List {...props} />);

describe('<List />', () => {
  it('should render without crashing', () => {
    const { container } = renderComponent();
    expect(container.querySelector('.list')).toBeInTheDocument();
  });

  describe('`children` prop', () => {
    it('should render children', () => {
      const children = ['Test', <span key="test">Test</span>];
      const { getAllByText } = renderComponent({ children });
      expect(getAllByText('Test').length).toEqual(2);
    });
  });

  describe(`Pass through props`, () => {
    it('should spread all remaining props to component', () => {
      const title = 'Test';
      setProps({ title });
      expect(getByTestId('test')).toHaveAttribute('title', title);
    });
  });
});
