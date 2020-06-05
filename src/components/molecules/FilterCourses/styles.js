import styled from 'styled-components';
import { mqMAX } from '@Styles/mediaQuery';

export const Aside = styled.div``;
export const Header = styled.header`
  padding: 18px 16px;
`;
export const ListCollapseFilter = styled.ul`
  ${mqMAX.md} {
    display: none;
  }
`;

export const TitleFilter = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ListItemRadio = styled.ul`
  padding: 0;
  & > li {
    padding: 8px 0px;
  }
  & > li > div {
    display: flex;
    align-items: flex-start;
  }
  & > li > div > span {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray};
    max-width: 140px;
    line-height: 1.2;
    padding-top: 4px;
  }
`;
export const ViewMore = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blueLight};
  margin-top: 8px;
`;
