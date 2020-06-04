import React from 'react';
import PropTypes from 'prop-types';

function Search({ fill, ...props }) {
  return (
    <svg width="24" height="24" {...props} viewBox="0 0 24 24">
      <rect width="24" height="24" fill="none" rx="0" ry="0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.71 19.29L15.67 14.25C17.73 11.49 17.52 7.56 15.02 5.06C13.69 3.73 11.92 3 10.04 3C8.16 3 6.39 3.73 5.06 5.06C3.73 6.39 3 8.16 3 10.04C3 11.92 3.73 13.69 5.06 15.02C6.39 16.35 8.16 17.08 10.04 17.08C11.58 17.08 13.04 16.58 14.25 15.67L19.29 20.71C19.49 20.9 19.74 21 20 21C20.26 21 20.51 20.9 20.71 20.71C21.1 20.32 21.1 19.68 20.71 19.29ZM6.48 13.6C5.52 12.65 5 11.38 5 10.04C5 8.69 5.52 7.43 6.48 6.48C7.43 5.52 8.69 5 10.04 5C11.39 5 12.65 5.52 13.6 6.48C15.56 8.44 15.56 11.64 13.6 13.61C12.65 14.56 11.38 15.09 10.04 15.09C8.7 15.09 7.43 14.55 6.48 13.6Z"
        fill={fill}
      />
    </svg>
  );
}

Search.defaultProps = {
  fill: '#ffffff',
};

Search.propTypes = {
  fill: PropTypes.string,
};

export default Search;
