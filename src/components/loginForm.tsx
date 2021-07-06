import React from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from '.';
import {
  InputBlock, ButtonBlock, Button,
} from '../sharedViews';

export const LoginForm: React.FC = () => (
  <>
    <InputBlock>
      <FormInput label id="login" type="text" placeholder="Login" />
      <FormInput label id="password" type="text" placeholder="Password" />
    </InputBlock>
    <ButtonBlock>
      <Button secondary> LogIn </Button>
    </ButtonBlock>
    <InputBlock>
      <span>Don&apos;t have account yet? Click below to register!</span>
      <Link to="/signUp">
        <Button secondaryLight link>
          Register
        </Button>
      </Link>
    </InputBlock>
  </>
);
