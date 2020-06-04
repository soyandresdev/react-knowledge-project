import styled from 'styled-components';

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
`;
export const Aside = styled.aside`
  grid-area: Aside;
  background: white;
  box-shadow: 10px 10px 13px -13px rgba(143, 143, 143, 1);
  border: 1px solid #e6e8ec;
  border-radius: 3px;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 250px;
  align-items: center;
  padding: 8px 0px;
  color: ${({ theme }) => theme.colors.gray};
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
