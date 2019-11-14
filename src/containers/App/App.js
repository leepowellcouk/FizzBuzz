import React, { useState } from 'react';
import { Formik } from 'formik';
import ErrorBoundary from 'react-error-boundary';
import Form from '../../components/Form';
import List from '../../components/List';
import Pagination from '../../components/Pagination';
import validate from './validate';
import createFizzBuzzItems from './createFizzBuzzItems';
import createFizzBuzzList from '../../utils/createFizzBuzzList';

const min = 1;
const max = 1000;
const itemsPerPage = 20;

const initialValues = { number: '' };

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => setCurrentPage(currentPage - 1);
  const handleNext = () => setCurrentPage(currentPage + 1);
  const handleSpecific = page => setCurrentPage(page);

  return (
    <ErrorBoundary>
      <div className="app">
        <h1 className="app__heading">FizzBuzz</h1>
        <Formik initialValues={initialValues} validate={validate(min, max)}>
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => {
            const { number: value } = values;
            const { number: error } = errors;

            const allItems =
              value && !error
                ? createFizzBuzzItems(createFizzBuzzList(value))
                : [];

            const start = (currentPage - 1) * itemsPerPage + 1;

            const items = allItems.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            );

            const totalPages = allItems.length
              ? Math.ceil(allItems.length / itemsPerPage)
              : 1;

            return (
              <>
                <Form
                  value={value}
                  error={error}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  min={min}
                  max={max}
                  inputProps={{
                    onBlur: handleBlur,
                  }}
                />

                {items.length > 0 && (
                  <>
                    <List start={start}>
                      {items.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPrevious={handlePrevious}
                      onNext={handleNext}
                      onSpecific={handleSpecific}
                    />
                  </>
                )}
              </>
            );
          }}
        </Formik>
      </div>
    </ErrorBoundary>
  );
};

App.displayName = 'App';

App.defaultProps = {};

App.propTypes = {};

export default App;
