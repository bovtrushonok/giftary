import styled from 'styled-components';
import * as color from '../constants/colors.ts';

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
