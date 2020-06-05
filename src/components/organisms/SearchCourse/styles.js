import styled from 'styled-components';
import { mqMAX } from '@Styles/mediaQuery';

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
    ${mqMAX.md} {
      width: 100%;
      padding: 0px 10px;
      margin-left: 0px;
      padding: 20px 0px;
      flex-direction: column;
    }
  }
  ${mqMAX.md} {
    width: calc(100% - 40px);
    padding: 20px 0px;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  width: 970px;
  padding: 14px 150px 0px;
  margin: 0 auto;
  ${mqMAX.md} {
    width: 100vw;
    padding: 14px 10px 0px;
  }
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
