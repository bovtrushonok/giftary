import styled from 'styled-components';
import * as color from '../constants/colors';
import * as size from '../constants/mediaQueries';

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
  }

  @media screen and (max-width: ${size.smallScreen}) {
    margin: 30px 0;
    width: 100%;
  }

  @media screen and (min-width: ${size.mediumScreen}) {
    width: 75%;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:focus + span {
    box-shadow: 0 0 1px ${color.mainShadows};
  }

  &:checked + span:before {
    transform: translateX(100%);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${color.overlayColor};
  transition: .4s;
  border-radius: 34px;
  z-index: -1;
  &:before {
    position: absolute;
    content: "";
    height: 95%;
    width: 50%;
    left: 4px;
    bottom: 4px;
    border-radius: 34px;
    background-color: ${color.white};
    transition: .4s;
  }
`;