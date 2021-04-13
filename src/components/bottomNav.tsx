import React from 'react';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import * as path from '../constants/routePaths';
import { NavWrapper, StyledNavbarLink } from '../sharedViews';

export const BottomNav: React.FC = () => (
  <NavWrapper>
    <StyledNavbarLink
      to={path.mainPagePath}
    >
      <HomeIcon />
    </StyledNavbarLink>
    <StyledNavbarLink
      to={path.profilePath}
    >
      <FavoriteIcon />
    </StyledNavbarLink>
    <StyledNavbarLink
      to={path.eventsPagePath}
    >
      <EventRoundedIcon />
    </StyledNavbarLink>
    <StyledNavbarLink
      to={path.friendsPagePath}
    >
      <ContactsRoundedIcon />
    </StyledNavbarLink>
  </NavWrapper>
);
