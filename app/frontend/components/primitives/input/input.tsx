import clsx from 'clsx';
import React from 'react';
import { Stack } from '../../layouts/stack/stack';
import { ErrorSubtitle } from '../typography/typography';

export default interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, label, errorMessage, ...props }, ref) => {
    const classes = clsx('w-full p-2 focus:rounded-lg', className, {
      ['border-slate-300 border-b-2 mb-5']: !errorMessage,
      ['border-error-dark border-2 rounded-lg']: errorMessage,
    });
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <input type={type} name={label} id={label} className={classes} ref={ref} {...props} />
        <Stack>
          {errorMessage && errorMessage.split('|').map((error) => <ErrorSubtitle key={error}>{error}</ErrorSubtitle>)}
        </Stack>
      </div>
    );
  }
);
