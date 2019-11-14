import React from 'react';
import { string, number, oneOfType, object, func } from 'prop-types';

const Form = ({ value, min, max, onChange, error, inputProps, ...props }) => (
  <form {...props} className="form">
    <label id="number" className="form__label">
      Enter a number between {min} and {max}
      <input
        {...inputProps}
        type="number"
        name="number"
        id="number"
        className="form__control"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </label>
    {error && <div className="form__error">{error}</div>}
  </form>
);

Form.displayName = 'Form';

Form.defaultProps = {
  value: undefined,
  min: undefined,
  max: undefined,
  error: undefined,
  inputProps: {},
  onChange: () => undefined,
};

Form.propTypes = {
  value: oneOfType([string, number]),
  min: oneOfType([string, number]),
  max: oneOfType([string, number]),
  error: string,
  inputProps: object,
  onChange: func,
};

export default Form;
