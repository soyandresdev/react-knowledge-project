import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput as InputElt } from './styles';

/**
  A component that is responsible for displaying a Input, depending on the attributes, a Input with a different design will be displayed.
 *Input Component
  @param {string} type
  @param {bool} disabled
  @param {string} id
  @param {string} name
  @param {func} onChange
  @param {string} type
  @return {react~Component} makeup Html for the Input.
 */

function Input({ ...resProps }) {
  return <InputElt {...resProps} />;
}

Input.defaultProps = {};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
