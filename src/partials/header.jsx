import { NavLink } from "react-router-dom";
import styled from "styled-components";


const MenuWrapper = styled.div`
  width: 80%;
  padding: 5px 7px;
  margin: 20px auto;
  background color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: #fce4ec;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const linkStyle = {
  textDecoration: "none",
  color: "#fce4ec",
}

const linkActiveStyle = {
  fontWeight: "bold",
  color: "#ffccbc",
}

const Header = () => {
  return(
    <MenuWrapper>
      <NavLink 
        to='/profile'
        style={linkStyle}
        activeStyle={linkActiveStyle}
        > Profile </NavLink>
      <NavLink 
        to='/events'
        style={linkStyle}
        activeStyle={linkActiveStyle}
        > Events </NavLink>
      <NavLink 
        to='/contacts'
        style={linkStyle}
        activeStyle={linkActiveStyle}
      > Friends </NavLink>
    </MenuWrapper>
  )
}

export default Header;