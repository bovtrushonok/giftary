import {
  InputBlock, ButtonBlock, Input, Button,
} from '../sharedViews/index';

export const Form = () => (
  <>
    <InputBlock>
      <Input id="login" type="text" placeholder="Login" />
      <label htmlFor="login" />
    </InputBlock>
    <InputBlock>
      <Input id="password" type="password" placeholder="Password" />
      <label htmlFor="password" />
    </InputBlock>
    <ButtonBlock>
      <Button secondary> LogIn </Button>
      <Button secondaryLight> SignUp </Button>
    </ButtonBlock>
  </>
);
