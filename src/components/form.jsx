import { InputBlock, ButtonBlock, Input, ButtonLogIn, ButtonSignUp } from '../sharedViews/form';

export const Form = () => {
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
