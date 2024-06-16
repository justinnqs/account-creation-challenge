import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type buttonSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface Props {
  type?: 'button' | 'submit';
  href?: string;
  children: ReactNode;
  className?: string;
  buttonType?: 'primary' | 'secondary';
  disabled?: boolean;
  size?: buttonSize;
  name?: string;
}

export function Button({
  href,
  children,
  type,
  className,
  buttonType = 'primary',
  disabled = false,
  size = 'sm',
  name,
}: Props) {
  const primaryClass = 'bg-button-primary text-button-primaryText hover:bg-button-hover';
  const secondaryClass = 'bg-button-secondary text-button-secondaryText border border-button-primary';
  const disabledClass = 'bg-button-disabled text-button-disabledText cursor-not-allowed';

  const classes = clsx('flex px-4 rounded-lg h-12 justify-center items-center', className, {
    [primaryClass]: !disabled && buttonType === 'primary',
    [secondaryClass]: !disabled && buttonType === 'secondary',
    [disabledClass]: disabled,
    ['w-32']: size === 'sm',
    ['w-40']: size === 'md',
    ['w-48']: size === 'lg',
    ['w-56']: size === 'xl',
    ['w-full']: size === 'full',
  });

  if (href && !disabled) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button role="button" name={name} type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
