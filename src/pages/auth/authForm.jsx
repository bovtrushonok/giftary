import styled from "styled-components";

const Wrapper = styled.section`
  width: 40%;
  min-width: 280px;
  max-width: 500px;
  margin: 25vh auto;
  padding: 20px;
  background-color: #e8eaf6;
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
  border-bottom: 1px solid #004d40;
  &:focus {
    outline: none;
    border-bottom: 3px solid #1A237E;
  }
`;

const Button = styled.button`
  width: 40%;
  margin: 15px auto;
  padding: 10px 7px;
  color: #EDE7F6;
  border: none;
  text-transform: capitalize;
  &:active,
  &:focus {
    outline: #4a148c 0.5px solid;
    box-shadow: 0 0 3pt 2pt #4a148c;
  }
`;

const ButtonLogIn = styled(Button)`
  background-color: #9575cd;
`;

const ButtonSignUp = styled(Button)`
  background-color: #ba68c8;  
`;

const Form = () => {
  return (
      <div>
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
      </div>

  )
}

const AuthForm = () => {
  return (
    <div>
      <Wrapper>
        <Form />
      </Wrapper>
    </div>
  )
}

export default AuthForm;