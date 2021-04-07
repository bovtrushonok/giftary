import { NavLink } from 'react-router-dom';
import * as path from '../constants/routePaths';
import { MenuWrapper, linkActiveStyleObj, linkStyleObj } from '../sharedViews';

export const Header = () => (
  <MenuWrapper>
    <NavLink
      to={path.mainPagePath}
      style={linkStyleObj}
      activeStyle={linkActiveStyleObj}
    >
      Main
    </NavLink>
    <NavLink
      to={path.profilePath}
      style={linkStyleObj}
      activeStyle={linkActiveStyleObj}
    >
      Profile
    </NavLink>
    <NavLink
      to={path.eventsPagePath}
      style={linkStyleObj}
      activeStyle={linkActiveStyleObj}
    >
      Events
    </NavLink>
    <NavLink
      to={path.friendsPagePath}
      style={linkStyleObj}
      activeStyle={linkActiveStyleObj}
    >
      Friends
    </NavLink>
  </MenuWrapper>
);
