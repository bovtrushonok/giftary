import EventRoundedIcon from '@material-ui/icons/EventRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div`
  display: none;  
  
  @media screen and (max-width: 500px) {
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding: 7px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 20px;
  }
`;

const linkStyle = {
  textDecoration: "none",
  color: "#757575",
}

const linkActiveStyle = {
  fontWeight: "bold",
  color: "#424242",
}

export default function BottomNav() {
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