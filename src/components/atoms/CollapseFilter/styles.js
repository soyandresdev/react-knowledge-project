import styled from 'styled-components';

export const Content = styled.div`
  border-top 1px solid ${({ theme }) => theme.colors.gray100};
`;
export const Header = styled.header`
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  cursor: pointer;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  margin: 0;
`;

export const Children = styled.div`
  padding: 5px 16px 30px;
`;
