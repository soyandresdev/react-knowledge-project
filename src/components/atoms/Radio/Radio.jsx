import React from 'react';
import PropTypes from 'prop-types';
import { RadioBox, Input, RadioFill } from './styles';

function Radio({ name, ...props }) {
  return (
    <RadioBox>
      <Input type="radio" name={name} {...props} />
      <RadioFill />
    </RadioBox>
  );
}
Radio.defaultProps = {
  name: 'wow',
};

Radio.propTypes = {
  name: PropTypes.string,
};

export default Radio;
