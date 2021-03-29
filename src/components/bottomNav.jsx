import {NavLink} from 'react-router-dom';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavWrapper, linkStyle, linkActiveStyle } from '../sharedViews/bottomNav';

export const BottomNav = () => {
  return (
    <NavWrapper>
      <NavLink to='/profile'  
        style={linkStyle}
        activeStyle={linkActiveStyle}
        > <FavoriteIcon /> </NavLink>
      <NavLink 
        to='/events'
        style={linkStyle}
        activeStyle={linkActiveStyle}
      > <EventRoundedIcon /> </NavLink>
      <NavLink 
        to='/contacts'
        style={linkStyle}
        activeStyle={linkActiveStyle}> <ContactsRoundedIcon /> </NavLink>
    </NavWrapper>
  );
}
