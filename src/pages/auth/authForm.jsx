import styled from "styled-components";
import * as color from '../../constants/colors';

const Wrapper = styled.section`
  width: 40%;
  min-width: 280px;
  max-width: 500px;
  margin: 25vh auto;
  padding: 20px;
  background-color: ${color.primaryBc};
`;

const InputBlock = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const ButtonBlock = styled(InputBlock)`
  flex-flow: row nowrap;
`;

const Input = styled.input`
  margin: 5px auto;
  padding: 10px 7px;
  width: 70%;
  min-width: 240px;
  max-width: 300px;
  border: none;
  border-bottom: 1px solid ${color.primaryText};
  color: ${color.primaryText};
  font-family: Tahoma, sans-serif;
  font-size: 1.1em;
  &:focus {
    outline: none;
    border-bottom: 3px solid ${color.primaryText};
  }
`;

const Button = styled.button`
  width: 40%;
  margin: 15px auto;
  padding: 10px 7px;
  color: ${color.lightText};
  border: none;
  text-transform: capitalize;
  font-family: Tahoma, sans-serif;
  font-size: 1.1em;
  &:active,
  &:focus {
    outline: ${color.mainShadows} 0.5px solid;
    box-shadow: 0 0 3pt 2pt ${color.mainShadows};
  }
`;

const ButtonLogIn = styled(Button)`
  background-color: ${color.secondaryBc};
`;

const ButtonSignUp = styled(Button)`
  background-color: ${color.secondaryLightBc};  
`;

const Form = () => {
  return (
      <>
        <InputBlock>
          <Input id="login" type="text" placeholder="Login"/>
          <label htmlFor="login"/>
        </InputBlock>
        <InputBlock>
          <Input id="password" type="password" placeholder="Password"/>
          <label htmlFor="password"/>
        </InputBlock>
        <ButtonBlock>
          <ButtonLogIn>LogIn</ButtonLogIn>
          <ButtonSignUp>SignUp</ButtonSignUp>
        </ButtonBlock>
      </>
  )
}

const AuthForm = () => {
  return (
    <>
      <Wrapper>
        <Form />
      </Wrapper>
    </>
  )
}

export default AuthForm;
