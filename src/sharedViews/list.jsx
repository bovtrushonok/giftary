import styled from 'styled-components';
import * as size from '../constants/mediaQueries';

export const List = styled.section`
  width: 95%;
  margin: 10px auto;
  padding: 5px 7px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: space-between;

  @media screen and (max-width: ${size.mobileScreen}) {
    margin: 30px 0;
    width: 100%;
  }

  @media screen and (min-width: ${size.mediumScreen}) {
    width: 75%;
  }
`;
