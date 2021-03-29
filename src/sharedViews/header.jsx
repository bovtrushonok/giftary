import styled from "styled-components";
import * as color from '../constants/colors';
import * as size from '../constants/mediaQueries';

export const MenuWrapper = styled.div`
  width: 80%;
  padding: 5px 7px;
  margin: 20px auto;
  background color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${color.lightAccentText};
  @media screen and (max-width: ${size.mobileScreen}) {
    display: none;
  }
  @media screen and (min-width: ${size.tabletScreen}) {
    width: 65%;
  }
`;

export const linkStyle = {
  textDecoration: "none",
  color: `${color.lightAccentText}`,
}

export const linkActiveStyle = {
  fontWeight: "bold",
  color: `${color.lightAccentLink}`,
}
