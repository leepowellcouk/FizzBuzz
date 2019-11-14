import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';

const renderComponent = props =>
  render(<Pagination currentPage="2" totalPages="5" {...props} />);

describe('<Pagination />', () => {
  it('should render without crashing', () => {
    const { container } = renderComponent();
    expect(container.querySelector('.pagination')).toBeInTheDocument();
  });
});
