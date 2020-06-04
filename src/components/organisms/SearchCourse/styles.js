import styled from 'styled-components';

export const SearchCourseBox = styled.div`
  margin-top: 80px;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const DropdownSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 100px;
  .dropdown {
    min-width: 150px;
    margin-left: 15px;
  }
`;

export const Content = styled.div`
  width: 970px;
  padding: 14px 150px 0px;
  margin: 0 auto;
`;
export const TextFind = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 22px;
`;

export const TabSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 18px;
`;
