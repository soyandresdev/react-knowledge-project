import React from 'react';
import PropTypes from 'prop-types';
import Icons from '@UI/Atoms/Icons';
import { Box, BoxIcon, InputElt } from './styles';

function InputIcon({ icon, ...restProps }) {
  return (
    <Box>
      <BoxIcon>
        <Icons type={icon} fill="#4c5656" />
      </BoxIcon>
      <InputElt {...restProps} />
    </Box>
  );
}
InputIcon.defaultProps = {
  icon: 'Search',
};
InputIcon.propTypes = {
  icon: PropTypes.string,
};

export default InputIcon;
