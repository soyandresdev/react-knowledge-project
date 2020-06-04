import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  height: 43px;
  border: solid 1px #707070;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 7px 10px;
  transition: 0.2s;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.04);
  cursor: text;
  &:focus {
    outline: none;
  }
  &:disabled {
    background: #f2f2f2;
    border: none;
  }
`;
