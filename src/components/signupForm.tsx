import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormInput } from '.';
import {
  InputBlock, ButtonBlock, Button,
} from '../sharedViews';

export const SignupForm: React.FC = () => (
  <>
    <InputBlock>
      <FormInput id="email" type="text" placeholder="Email" label />
      <FormInput id="login" type="text" placeholder="Login" label />
      <FormInput id="password" type="password" placeholder="Password" label />
      <FormInput id="confirmPassword" type="password" placeholder="Confirm password" label />
    </InputBlock>
    <ButtonBlock>
      <Button secondaryLight> SigUp </Button>
    </ButtonBlock>
    <InputBlock>
      <span>Already have account? Click below to login!</span>
      <NavLink to="/">
        <Button secondary link>
          Login
        </Button>
      </NavLink>
    </InputBlock>
  </>
);
