import React from 'react';
import { Link } from 'react-router-dom';
import { FlowLayout } from '../../components/layouts/flow-layout/flow-layout.tsx';
import { GET_PATH } from '../../routes.tsx';

export function Root() {
  return (
    <FlowLayout>
      <Link to={GET_PATH.account_selection} className="text-xl">
        Get started
      </Link>
    </FlowLayout>
  );
}
