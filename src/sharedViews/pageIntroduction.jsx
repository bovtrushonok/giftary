import styled from 'styled-components';
import * as color from '../constants/colors';

export const PageIntroduction = styled.section`
width: 95%;
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
align-content: space-between;
padding: 5px 15px;
margin: 10px 5px;
span {
  display: block;
  width: 100%;
  color: ${color.lightText};
}
`;
