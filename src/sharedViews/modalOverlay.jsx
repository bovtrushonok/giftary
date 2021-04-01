import styled from 'styled-components';
import * as color from '../constants/colors.ts';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: ${color.overlayColor};
  position: absolute;
  z-index: 1;
`;
