import styled from 'styled-components';
import * as color from '../constants/colors.ts';

export const IconWrapper = styled.div`
  display: flex;
  position: relative;
  justify-self: flex-end;
  flex-flow: column wrap;
  width: 100%;
  margin: 15px auto;

  span {
    display: none;
    font-style: italic;
    color: ${color.primaryText};
    align-self: center;
  }

  svg {
    font-size: 62px;
    color: ${color.secondaryIcon};
    display: flex;
    align-self: flex-end;
    position: absolute;
    right: -7px;
  }

  svg:hover {
    color: ${color.secondaryDarkenIcon};
    cursor: pointer;
  }

  svg:hover + span {
    display: inline-block;
  }
`;
