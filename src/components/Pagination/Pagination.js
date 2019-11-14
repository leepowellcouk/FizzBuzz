import React from 'react';
import { number, string, func, object, oneOfType } from 'prop-types';
import createNumberArray from '../../utils/createNumberArray';

const Pagination = ({
  currentPage: currentPageProp,
  totalPages: totalPagesProp,
  onPrevious,
  onNext,
  onSpecific,
  previousProps,
  nextProps,
  ...props
}) => {
  const currentPage = Number(currentPageProp);
  const totalPages = Number(totalPagesProp);
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div {...props} className="pagination">
      <button
        {...previousProps}
        type="button"
        disabled={isPreviousDisabled}
        onClick={onPrevious}
        className="pagination__previous"
      >
        Previous
      </button>
      <ol className="pagination__list">
        {createNumberArray(totalPages).map(number => (
          <li key={number} className="pagination__item">
            {number === currentPage ? (
              <span className="pagination__page pagination__page--current">
                {number}
              </span>
            ) : (
              <button
                value={number}
                onClick={event => onSpecific(Number(event.target.value))}
                className="pagination__page"
              >
                {number}
              </button>
            )}
          </li>
        ))}
      </ol>
      <button
        {...nextProps}
        type="next"
        disabled={isNextDisabled}
        onClick={onNext}
        className="pagination__next"
      >
        Next
      </button>
    </div>
  );
};

Pagination.displayName = 'Pagination';

Pagination.defaultProps = {
  onPrevious: () => undefined,
  onNext: () => undefined,
  onSpecific: () => undefined,
  previousProps: {},
  nextProps: {},
};

Pagination.propTypes = {
  currentPage: oneOfType([string, number]).isRequired,
  totalPages: oneOfType([string, number]).isRequired,
  onPrevious: func,
  onNext: func,
  onSpecific: func,
  previousProps: object,
  nextProps: object,
};

export default Pagination;
