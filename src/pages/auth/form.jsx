import React from 'react';
import { Route } from 'react-router';
import * as path from '../../constants/routePaths';
import { LoginForm, SignupForm } from '../../components';
import { FormWrapper } from '../../sharedViews';

export const Form = () => (
  <FormWrapper>
    <Route path={path.defaultPath} exact render={() => <LoginForm />} />
    <Route path={path.registrationFormPath} render={() => <SignupForm />} />
  </FormWrapper>
);
