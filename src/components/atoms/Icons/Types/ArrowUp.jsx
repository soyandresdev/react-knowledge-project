import React from 'react';
import PropTypes from 'prop-types';

function ArrowUp({ fill, ...props }) {
  return (
    <svg width="24" height="24" {...props} viewBox="0 0 24 24">
      <rect width="24" height="24" fill="none" rx="0" ry="0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0601 13.9386L13.0601 7.93859C12.4701 7.34859 11.5201 7.34859 10.9401 7.93859L4.94006 13.9386C4.35006 14.5286 4.35006 15.4786 4.94006 16.0586C5.53006 16.6486 6.48006 16.6486 7.06006 16.0586L12.0001 11.1186L16.9401 16.0586C17.2301 16.3486 17.6201 16.4986 18.0001 16.4986C18.3801 16.4986 18.7701 16.3486 19.0601 16.0586C19.6501 15.4786 19.6501 14.5186 19.0601 13.9386Z"
        fill={fill}
      />
    </svg>
  );
}

ArrowUp.defaultProps = {
  fill: '#ffffff',
};

ArrowUp.propTypes = {
  fill: PropTypes.string,
};

export default ArrowUp;
