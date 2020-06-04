/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Box } from './styles';

const DropdownRoundCustom = ({ onChange, value, options, theme, size }) => {
  return (
    <Box>
      <Select
        className={`Dropdown Theme-${theme} ${size}`}
        classNamePrefix="react-select"
        options={options}
        onChange={onChange}
        value={value}
        components={{ IndicatorSeparator: () => null }}
      />
    </Box>
  );
};

DropdownRoundCustom.defaultProps = {
  theme: 'transparent',
  size: 'small',
};

DropdownRoundCustom.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  theme: PropTypes.string,
  size: PropTypes.string,
  options: PropTypes.array,
};

export default DropdownRoundCustom;
