import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333; /* Color de fondo */
  color: #fff; /* Color del texto */
  padding: 10px 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 18px;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5900; /* Cambio de color al pasar el cursor */
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

export function Navbar() {
  return (
    <Nav>
      <NavList>
        <StyledNavLink to='/fake'>
          <NavItem>Fake Store</NavItem>
        </StyledNavLink>
        <StyledNavLink to='/poke'>
          <NavItem>Poke</NavItem>
        </StyledNavLink>
        <StyledNavLink to='/rick'>
          <NavItem>Ricky</NavItem>
        </StyledNavLink>
        <StyledNavLink to='/movie'>
          <NavItem>MTBMovie</NavItem>
        </StyledNavLink>
        <StyledNavLink to='/marvel'>
          <NavItem>Marvel</NavItem>
        </StyledNavLink>
      </NavList>
    </Nav>
  );
}
