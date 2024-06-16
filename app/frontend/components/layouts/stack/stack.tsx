import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  flexDirection?: 'row' | 'col';
}

export function Stack({ children, className, flexDirection = 'col' }: Props) {
  const classes = clsx('flex', className, {
    ['flex-col']: flexDirection === 'col',
    ['flex-row']: flexDirection === 'row',
  });
  return <div className={classes}>{children}</div>;
}
