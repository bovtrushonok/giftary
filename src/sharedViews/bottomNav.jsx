import styled from 'styled-components';
import * as color from '../constants/colors';
import * as size from '../constants/mediaQueries';

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

export const linkStyle = {
  textDecoration: "none",
  color: `${color.primaryIcon}`,
}

export const linkActiveStyle = {
  fontWeight: "bold",
  color: `${color.secondaryText}`,
}
