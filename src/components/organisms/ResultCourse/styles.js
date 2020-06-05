import styled from 'styled-components';
import ReactPaginate from 'rc-pagination';
import { mqMAX } from '@Styles/mediaQuery';

export const Content = styled.section`
  width: 970px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 'Aside CourseList' '. CourseList';
  grid-gap: 16px;
  ${mqMAX.md} {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
`;
export const Aside = styled.aside`
  grid-area: Aside;
  background: white;
  box-shadow: 10px 10px 13px -13px rgba(143, 143, 143, 1);
  border: 1px solid #e6e8ec;
  border-radius: 3px;
  ${mqMAX.md} {
    margin-bottom: 10px;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 250px;
  align-items: center;
  padding: 8px 0px;
  color: ${({ theme }) => theme.colors.gray};
  ${mqMAX.md} {
    grid-template-columns: 1fr;
    grid-template-rowq: 1fr 1fr;
    grid-gap: 10px;
  }
`;

export const PageInfo = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  line-height: 22px;
  margin: 0;
  strong {
    font-weight: 800;
  }
`;
export const DropdownBox = styled.div`
  display: flex;
  align-items: center;
  .Select {
    flex: 1;
    margin-left: 10px;
  }
`;

export const CourseList = styled.section`
  grid-area: CourseList;
  background: white;
  box-shadow: 10px 10px 13px -13px rgba(143, 143, 143, 1);
  border: 1px solid #e6e8ec;
  border-radius: 3px;
  padding: 10px;
`;
export const ReactPaginateStyles = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
`;

export const EmptyResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 26px;
  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
