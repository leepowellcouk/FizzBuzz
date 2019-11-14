import React from 'react';
import { render } from '@testing-library/react';
import Item from './Item';



describe('<List.Item />', () => {
  let container;
  let rerender;
  let getByTestId;

  const createComponent = props => <Item data-testid="test" {...props} />;

  const setProps = props => rerender(createComponent(props));

  beforeEach(() => {
    ({ container, rerender, getByTestId } = render(
      createComponent()
    ));
  });

  it('should render without crashing', () => {
    expect(container.querySelector('.list__item')).toBeInTheDocument();
  });

  describe('`children` prop', () => {
    it('should render children', () => {
      const children = 'Test';
      setProps({ children });
      expect(container).toHaveTextContent(children);
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
