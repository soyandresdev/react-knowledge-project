import React from 'react';
import Button from '@UI/Atoms/Button';
import Logo from '@Static/images/logo.png';
import {
  NavbarBox,
  Content,
  ContentLeft,
  FigureLogo,
  NavList,
  NavItem,
  NavLink,
  NavActions,
} from './styles';

export default function Navbar() {
  return (
    <NavbarBox>
      <Content>
        <ContentLeft>
          <div>
            <FigureLogo>
              <img src={Logo} alt="Logo" />
            </FigureLogo>
          </div>
          <div>
            <NavList>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Plans</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Organizations <span className="caret" />
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink href="/">Browse courses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" rel="noopener noreferrer" href="#">
                  Support
                </NavLink>
              </NavItem>
            </NavList>
          </div>
        </ContentLeft>
        <NavActions>
          <Button colorTheme="primary">Sign In</Button>
          <Button colorTheme="secondary">7 day trial</Button>
        </NavActions>
      </Content>
    </NavbarBox>
  );
}
