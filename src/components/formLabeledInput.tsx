import React from 'react';
import { Input, Label } from '../sharedViews';

type InputPropsType = {
  id: any
  label?: true
  type: string
  placeholder: string
}

export const FormInput: React.FC<InputPropsType> = ({
  id, label, type, placeholder,
}) => (
  <>
    <Input id={id} type={type} placeholder={placeholder} />
    {label && <Label id={id} />}
  </>
);
