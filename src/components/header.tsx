import React from 'react';
import * as path from '../constants/routePaths';
import { MenuWrapper, StyledHeaderLink } from '../sharedViews';

export const Header: React.FC = () => (
  <MenuWrapper>
    <StyledHeaderLink
      to={path.mainPagePath}
    >
      Main
    </StyledHeaderLink>
    <StyledHeaderLink
      to={path.profilePath}
    >
      Profile
    </StyledHeaderLink>
    <StyledHeaderLink
      to={path.eventsPagePath}
    >
      Events
    </StyledHeaderLink>
    <StyledHeaderLink
      to={path.friendsPagePath}
    >
      Friends
    </StyledHeaderLink>
  </MenuWrapper>
);
