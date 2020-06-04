import React from 'react';
import PropTypes from 'prop-types';

function ArrowDown({ fill, ...props }) {
  return (
    <svg width="24" height="24" {...props} viewBox="0 0 24 24">
      >
      <rect width="24" height="24" fill="none" rx="0" ry="0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.06 7.9425C18.47 7.3525 17.52 7.3525 16.94 7.9425L12 12.8825L7.06 7.9425C6.47 7.3525 5.52 7.3525 4.94 7.9425C4.35 8.5325 4.35 9.4825 4.94 10.0625L10.94 16.0625C11.23 16.3525 11.62 16.5025 12 16.5025C12.38 16.5025 12.77 16.3525 13.06 16.0625L19.06 10.0625C19.65 9.4825 19.65 8.5225 19.06 7.9425Z"
        fill={fill}
      />
    </svg>
  );
}

ArrowDown.defaultProps = {
  fill: '#ffffff',
};

ArrowDown.propTypes = {
  fill: PropTypes.string,
};

export default ArrowDown;
