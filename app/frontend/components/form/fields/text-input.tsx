import React from 'react';
import InputProps, { Input } from '../../primitives/input/input';

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Input type="text" {...props} ref={ref} />;
});
