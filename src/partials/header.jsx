import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as color from '../constants/colors';


const MenuWrapper = styled.div`
  width: 80%;
  padding: 5px 7px;
  margin: 20px auto;
  background color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${color.lightAccentText};
  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

const linkStyle = {
  textDecoration: "none",
  color: `${color.lightAccentText}`,
}

const linkActiveStyle = {
  fontWeight: "bold",
  color: `${color.lightAccentLink}`,
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