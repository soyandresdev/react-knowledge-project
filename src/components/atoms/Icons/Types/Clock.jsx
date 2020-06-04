import React from 'react';
import PropTypes from 'prop-types';

function Clock({ fill, ...props }) {
  return (
    <svg width="24" height="24" {...props} viewBox="0 0 24 24">
      <rect width="24" height="24" fill="none" rx="0" ry="0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM19.8 12C19.8 16.3078 16.3078 19.8 12 19.8C7.69218 19.8 4.2 16.3078 4.2 12C4.2 7.69218 7.69218 4.2 12 4.2C16.3078 4.2 19.8 7.69218 19.8 12ZM11.4 5.6C11.4 5.26863 11.6686 5 12 5C12.3314 5 12.6 5.26863 12.6 5.6V11.4H16.4C16.7314 11.4 17 11.6686 17 12C17 12.3314 16.7314 12.6 16.4 12.6H11.9C11.6239 12.6 11.4 12.3761 11.4 12.1V11.5V11.4V5.6Z"
        fill={fill}
      />
    </svg>
  );
}

Clock.defaultProps = {
  fill: '#ffffff',
};

Clock.propTypes = {
  fill: PropTypes.string,
};

export default Clock;
