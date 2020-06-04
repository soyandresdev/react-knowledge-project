import styled from 'styled-components';

export const NavbarBox = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.white};
  z-index: 99;
`;
export const Content = styled.div`
  height: 80px;
  width: 970px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const FigureLogo = styled.figure`
  width: 150px;
  margin-right: 20px;
  img {
    width: 100%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  max-height: 80px;
  padding-bottom: 0;
  box-shadow: unset;
  flex-direction: row;
`;
export const NavItem = styled.li`
  min-height: 80px;
  padding: 0px 15px;
  border: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &.active {
    box-shadow: inset 0 -3px 0 ${({ theme }) => theme.colors.green};
    a {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray};
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  :hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const NavActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
