import clsx from 'clsx';
import React from 'react';
import errorIcon from '../../../../assets/error.svg';
import { Stack } from '../../layouts/stack/stack';

interface Props {
  children: string;
  className?: string;
}

export function H1({ children, className }: Props) {
  return <h1 className={clsx('text-4xl font-black', className)}>{children}</h1>;
}

export function Label({ children, className }: Props) {
  return (
    <label
      aria-labelledby="text"
      htmlFor={'text'}
      className={clsx('text-sm text-text-secondary font-medium', className)}
    >
      {children}
    </label>
  );
}

export function P({ children, className }: Props) {
  return <p className={clsx('text-[hsla(243,30%,13%,.63)] text-base m-0 mb-1', className)}>{children}</p>;
}

export function ErrorSubtitle({ children: error, className }: Props) {
  return (
    <Stack flexDirection="row" className="gap-1 items-center">
      <img className="w-3 text-error-dark aspect-square" src={errorIcon} />
      <h5 className={clsx('text-error-dark text-base mb-1 font-thin text-xs', className)}>{error}</h5>
    </Stack>
  );
}
