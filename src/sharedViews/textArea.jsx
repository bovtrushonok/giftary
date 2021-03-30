import styled from 'styled-components';
import * as color from '../constants/colors';

export const TextArea = styled.textarea`
  display: flex;
  width: 80%;
  height: 20%;
  margin: 7px auto;
  padding: 10px 7px;
  border-radius: 10px;
  background-color: ${color.primaryBc};
`;
