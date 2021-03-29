import styled from 'styled-components';
import * as color from '../constants/colors';

export const Overlay = styled.div`
  width: 99vw;
  height: 99vh;
  background-color: ${color.overlayColor};
  position: absolute;
  z-index: 1;
`;