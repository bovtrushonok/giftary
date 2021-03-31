import styled from 'styled-components';
import * as color from '../constants/colors.ts';
import * as size from '../constants/mediaQueries.ts';

export const Modal = styled.section`
  width: 55%;
  height: 90vh;
  margin: 20px auto;
  padding: 15px 7px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
  background: linear-gradient(180deg, ${color.topBcModalGradient}, ${color.middleBcModalGradient}, ${color.bottomBcModalGradient});
  position: absolute;
  bottom: 0;
  left: 27%;
  z-index: 2;
  border-radius: 14px;
  
  @media screen and (max-width: ${size.smallScreen}) {
    margin: 30px 0;
    width: 95%;
    left: 2.4%;
  }

  @media screen and (min-width: ${size.mediumScreen}) {
    width: 75%;
    left: 12%;
  }
`;
