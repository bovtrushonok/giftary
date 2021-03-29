import styled from 'styled-components';
import * as color from '../constants/colors';

const Modal = styled.section`
  width: 95vw;
  height: 90vh;
  margin: 20px auto;
  padding: 5px 7px;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
  background: linear-gradient(180deg, rgba(208,131,206,1) 0%, rgba(194,128,210,1) 23%, rgba(236,231,236,1) 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  border-radius: 14px;
`;

const Button = styled.button`
  position: fixed;
  bottom: 10px;
  margin: 5px auto 0;
  padding: 5px 7px;
  font-size: 1.3em;
  border: none;
  background-color: transparent;
  color: ${color.secondaryDText};

  &:hover {
    cursor: pointer;
    color: ${color.primaryText};
  }
`;

const TextInput = styled.input`
  display: flex;
  width: 100%;
  max-height: 50px;
  margin: 7px auto;
  padding: 10px 7px;
  border-radius: 10px;
  background-color: ${color.primaryBc};
`;

const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  margin: 7px auto;
  padding: 10px 7px;
  border-radius: 10px;
  background-color: ${color.primaryBc};
`;

const Overlay = styled.div`
  width: 99vw;
  height: 99vh;
  background-color: ${color.overlayColor};
  position: absolute;
  z-index: 1;
`;

export { Modal, Button, TextInput, TextArea, Overlay }