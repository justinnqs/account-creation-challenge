import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function CenterLayout({ children }: Props) {
  return (
    <div className="flex h-full mt-5 max-w-[1000px] mx-auto items-center justify-center">
      {children}
    </div>
  );
}
