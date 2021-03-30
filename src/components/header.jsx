import { NavLink } from "react-router-dom";
import * as path from '../constants/routePaths';
import { MenuWrapper, linkActiveStyle, linkStyle } from '../sharedViews/header';

export const Header = () => {
  return(
    <MenuWrapper>
      <NavLink 
        to={path.mainPagePath}
        style={linkStyle}
        activeStyle={linkActiveStyle}
        > Main </NavLink>
      <NavLink 
        to={path.profilePath}
        style={linkStyle}
        activeStyle={linkActiveStyle}
        > Profile </NavLink>
      <NavLink 
        to={path.eventsPagePath}
        style={linkStyle}
        activeStyle={linkActiveStyle}
        > Events </NavLink>
      <NavLink 
        to={path.friendsPagePath}
        style={linkStyle}
        activeStyle={linkActiveStyle}
      > Friends </NavLink>
    </MenuWrapper>
  )
}
