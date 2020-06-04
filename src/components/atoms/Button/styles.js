import styled from 'styled-components';
import { variant } from 'styled-system';

export const StyledButton = styled.button`
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid;
  text-align: center;
  padding: 12px 16px;
  border-radius: 2px;
  ${variant({
    prop: 'colorTheme',
    variants: {
      primary: {
        color: 'gray',
        bg: 'white',
        borderColor: 'gray',
        '&:hover': {
          bg: 'gray100',
          borderColor: 'gray',
        },
        '&:disabled': {
          bg: 'gray',
          borderColor: 'gray',
          color: 'white',
        },
        '&:disabled:hover': {
          bg: 'gray',
          borderColor: 'gray',
        },
      },
      secondary: {
        color: 'white',
        bg: 'green',
        borderColor: 'green',
        fontWeight: 800,
        '&:hover': {
          bg: 'green100',
          borderColor: 'green',
        },
        '&:disabled': {
          bg: 'white',
          borderColor: 'gray',
          color: 'gray',
        },
        '&:disabled:hover': {
          bg: 'white',
          borderColor: 'gray',
        },
      },
    },
  })};
`;
