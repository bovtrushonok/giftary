import * as color from '../constants/colors';
import { InputBlock, ButtonBlock } from '../sharedViews/form';
import { Input } from '../sharedViews/input';
import { Button } from '../sharedViews/button';

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
          <Button bcColor={color.secondaryBc}> LogIn </Button>
          <Button bcColor={color.secondaryLightBc}> SignUp </Button>
        </ButtonBlock>
      </>
  )
}
