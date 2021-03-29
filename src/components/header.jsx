import { NavLink } from "react-router-dom";
import { MenuWrapper, linkActiveStyle, linkStyle } from '../sharedViews/header';

export const Header = () => {
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
