import styled from 'styled-components';
import * as color from '../constants/colors.ts';

export const Input = styled.input`
  margin: 5px auto;
  padding: 10px 7px;
  width: 85%;
  border: none;
  border-bottom: 1px solid ${color.primaryText};
  color: ${color.primaryText};
  font-family: Tahoma, sans-serif;
  font-size: 15px;

  &:focus {
    outline: none;
    border-bottom: 3px solid ${color.primaryText};
  }
`;
