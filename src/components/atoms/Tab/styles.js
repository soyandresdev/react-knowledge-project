import styled from 'styled-components';

export const Tab = styled.div`
  padding: 18px 20px;
  color: ${({ theme }) => theme.colors.white};
  ${({ active, theme }) => (active ? `border-bottom: 3px solid ${theme.colors.green}` : '')};
  ${({ active }) => (!active ? `opacity: 0.6` : '')};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;
