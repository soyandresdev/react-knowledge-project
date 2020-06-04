import React from 'react';
import PropTypes from 'prop-types';

function Computer({ fill, ...props }) {
  return (
    <svg width="24" height="24" {...props} viewBox="0 0 24 24">
      <rect width="24" height="24" fill="none" rx="0" ry="0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.4999 3.3999H20.4999C21.1099 3.3999 21.5999 3.8899 21.5999 4.4999V15.4999C21.5999 16.1099 21.1099 16.5999 20.4999 16.5999H14V19.3999H16.9999C17.3299 19.3999 17.5999 19.6699 17.5999 19.9999C17.5999 20.3299 17.3299 20.5999 16.9999 20.5999H6.9999C6.6699 20.5999 6.3999 20.3299 6.3999 19.9999C6.3999 19.6699 6.6699 19.3999 6.9999 19.3999H10V16.5999H3.4999C2.8899 16.5999 2.3999 16.1099 2.3999 15.4999V4.4999C2.3999 3.8899 2.8899 3.3999 3.4999 3.3999ZM3.5999 15.3999H20.3999V4.5999H3.5999V15.3999Z"
        fill={fill}
      />
    </svg>
  );
}

Computer.defaultProps = {
  fill: '#ffffff',
};

Computer.propTypes = {
  fill: PropTypes.string,
};

export default Computer;
