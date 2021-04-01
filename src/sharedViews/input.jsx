import styled from 'styled-components';
import * as color from '../constants/colors.ts';

export const Input = styled.input`
  display: ${(props) => props.disp || 'inline-block'};
  justify-self: flex-end;
  margin: ${(props) => props.margin || '5px auto'};
  padding: 10px 7px;
  width: ${(props) => props.width || '85%'};
  height: ${(props) => props.height || 'auto'};
  border: none;
  border-bottom: 1px solid ${color.primaryText};
  color: ${color.primaryText};
  font-family: Tahoma, sans-serif;
  font-size: 15px;
  opacity: ${(props) => props.opacity || '1'};
  &:focus {
    outline: none;
    border-bottom: 3px solid ${color.primaryText};
  }
`;
