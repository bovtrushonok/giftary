import {
  Input, Label,
} from '../sharedViews';

export const FormInput = ({
  id, label, type, placeholder,
}) => (
  <>
    <Input id={id} type={type} placeholder={placeholder} />
    {label && <Label htmlFor={id} />}
  </>
);
