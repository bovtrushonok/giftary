import styled from 'styled-components';

export const InputCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  display: flex;
  justify-self: flex-end;
  margin: 0;
  width: 10%;
  height: 20px;
  border: none;

  &:focus {
    outline: none;
  }

  ${(props) => props.Toggle && `
    width: 0;
    opacity: 0;
    height: 0;
  `}
`;
