import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as color from '../constants/colors.ts';
import * as size from '../constants/mediaQueries.ts';

export const NavWrapper = styled.div`
  display: none;  
  
  @media screen and (max-width: ${size.mobileScreen}) {
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
  textDecoration: 'none',
  color: `${color.primaryIcon}`,
};

const linkActiveStyle = {
  fontWeight: 'bold',
  color: `${color.secondaryText}`,
};

export const StyledNavbarLink = styled(NavLink).attrs({
  style: linkStyle,
  activeStyle: linkActiveStyle,
})`
`;
