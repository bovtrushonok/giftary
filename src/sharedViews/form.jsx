import styled from 'styled-components';
import * as color from '../constants/colors.ts';

export const FormWrapper = styled.section`
  width: 40%;
  min-width: 280px;
  max-width: 500px;
  margin: 25vh auto;
  padding: 20px;
  background-color: ${color.primaryBc};
`;

export const InputBlock = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export const ButtonBlock = styled(InputBlock)`
  flex-flow: row nowrap;
`;
