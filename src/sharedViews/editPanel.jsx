import styled from 'styled-components';
import { primaryText } from '../constants/colors';

export const EditingPanel = styled.div`
  width: 5%;
  margin: 5px auto;
  padding: 5px 7px;
  display: flex;
  justify-content: center;

  svg {
    margin: 0 10px;
    display: none;
    font-size: 32px;
    color: ${primaryText};
  }
  
  &:hover {
    svg {
      display: inline-block;
    }
  }

  svg:hover {
    cursor: pointer;
  }
`;
