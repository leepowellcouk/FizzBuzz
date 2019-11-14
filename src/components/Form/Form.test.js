import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

const value = '5';
const min = '1';
const max = '10';

describe('<Form />', () => {
  let rerender;
  let getByText;
  let getByDisplayValue;
  let getByTestId;

  const createComponent = props => (
    <Form value={value} min={min} max={max} data-testid="test" {...props} />
  );
  const setProps = props => rerender(createComponent(props));

  beforeEach(() => {
    ({ rerender, getByText, getByDisplayValue, getByTestId } = render(
      createComponent()
    ));
  });

  describe('`value` prop', () => {
    it(`should display input with value of ${value}`, () => {
      expect(getByDisplayValue(value)).toBeInTheDocument();
    });
  });

  describe('`min` prop', () => {
    it(`should display input with min attribute of ${min}`, () => {
      expect(getByDisplayValue(value)).toHaveAttribute('min', min);
    });
  });

  describe('`max` prop', () => {
    it(`should display input with max attribute of ${max}`, () => {
      expect(getByDisplayValue(value)).toHaveAttribute('max', max);
    });
  });

  describe('`error` prop', () => {
    it('should display error message', () => {
      const error = 'Test error message';
      setProps({ error });
      expect(getByText(error)).toBeInTheDocument();
    });
  });

  describe('`onChange` prop', () => {
    it('should be called', () => {
      const onChange = jest.fn();
      const event = {
        target: { value: 10 },
      };
      setProps({ onChange });
      fireEvent.change(getByDisplayValue(value), event);
      expect(onChange).toHaveBeenCalled();
    });
  });

  describe('`inputProps` prop', () => {
    it('should spread to input component', () => {
      const inputProps = { 'data-test': 'test' };
      setProps({ inputProps });
      expect(getByDisplayValue(value)).toHaveAttribute('data-test');
    });

    it('should not override internal props', () => {
      const inputProps = { type: 'text' };
      setProps({ inputProps });
      expect(getByDisplayValue(value)).toHaveAttribute('type', 'number');
    });
  });

  describe('Pass through props', () => {
    it('should spread all remaining props to form component', () => {
      const title = 'Test';
      const onSubmit = jest.fn();
      setProps({ title, onSubmit });
      const form = getByTestId('test');

      fireEvent.submit(form);

      expect(form).toHaveAttribute('title', title);
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
