import {NavLink} from 'react-router-dom';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import * as path from '../constants/routePaths';
import { NavWrapper, linkStyle, linkActiveStyle } from '../sharedViews/bottomNav';

export const BottomNav = () => {
  return (
    <NavWrapper>
      <NavLink to={path.mainPagePath}  
        style={linkStyle}
        activeStyle={linkActiveStyle}
        > <HomeIcon /> </NavLink>
      <NavLink to={path.profilePath}  
        style={linkStyle}
        activeStyle={linkActiveStyle}
        > <FavoriteIcon /> </NavLink>
      <NavLink 
        to={path.eventsPagePath}
        style={linkStyle}
        activeStyle={linkActiveStyle}
      > <EventRoundedIcon /> </NavLink>
      <NavLink 
        to={path.friendsPagePath}
        style={linkStyle}
        activeStyle={linkActiveStyle}> <ContactsRoundedIcon /> </NavLink>
    </NavWrapper>
  );
}
