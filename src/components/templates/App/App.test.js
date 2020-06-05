import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Find CE for a/i);
  expect(linkElement).toBeInTheDocument();
});
