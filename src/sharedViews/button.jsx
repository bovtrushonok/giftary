import styled from 'styled-components';
import * as color from '../constants/colors.ts';

export const Button = styled.button`
  width: 40%;
  margin: 15px auto;
  padding: 10px 7px;
  color: ${color.lightText};
  border: none;
  text-transform: capitalize;
  font-family: Tahoma, sans-serif;
  font-size: 1.1em;
  background-color: transparent;
  &:active,
  &:focus {
    outline: ${color.mainShadows} 0.5px solid;
    box-shadow: 0 0 4px 3px ${color.mainShadows};
  }
  &:hover {
    cursor: pointer;
  }

  ${(props) => props.secondary && `
    background-color: ${color.secondaryBc};
  `}
  
  ${(props) => props.secondaryLight && `
    background-color: ${color.secondaryLightBc};
  `}

  ${(props) => props.link && `
    width: auto;
  `}
`;
