import styled from 'styled-components';
import * as color from '../constants/colors.ts';
import * as size from '../constants/mediaQueries.ts';

export const Switch = styled.label`
  position: relative;
  width: 95%;
  height: 94px;
  margin: 15px auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  span {
    padding: 0 7px;
    margin: 0 auto;
    color: ${color.secondaryText};
    z-index: 2;
  }

  input:checked + span:before {
    transform: translateX(100%);
  }

  input:focus + span {
    box-shadow: 0 0 1px ${color.mainShadows};
  }

  @media screen and (max-width: ${size.smallScreen}) {
    margin: 30px 0;
    width: 100%;
  }

  @media screen and (min-width: ${size.mediumScreen}) {
    width: 75%;
  }
`;
