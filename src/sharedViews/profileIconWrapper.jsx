import styled from 'styled-components';
import * as color from '../constants/colors';

export const IconWrapper = styled.div `
  display: flex;
  flex-flow: column wrap;
  justify-items: flex-start;
  align-items: flex-end;
  width: 25%;
  align-self: flex-end;
  justify-self: flex-end;

  span {
    display: none;
    font-style: italic;
    color: ${color.primaryText};
  }

  svg {
    font-size: 62px;
    color: ${color.secondaryIcon};
    display: flex;
    align-self: flex-end;
  }
  svg:hover {
    color: ${color.secondaryDarkenIcon};
    cursor: pointer;
  }

  svg:hover + span {
    display: inline-block;
  }
`;
