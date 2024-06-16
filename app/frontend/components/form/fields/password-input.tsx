import React from 'react';
import InputProps, { Input } from '../../primitives/input/input';

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Input type="password" {...props} ref={ref} />;
});
