import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton as ButtonElt } from './styles';
/**
  A component that is responsible for displaying a button, depending on the attributes, a button with a different design will be displayed.
 *Button Component
  @param {string} colorTheme
  @param {string} type
  @param {bool} disabled
  @param {string} id
  @param {func} onClick
  @return {react~Component} makeup Html for the Button.
 */

function Button({ children, ...resProps }) {
  return <ButtonElt {...resProps}>{children}</ButtonElt>;
}

Button.defaultProps = {
  colorTheme: 'primary',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
  colorTheme: PropTypes.string,
};

export default Button;
