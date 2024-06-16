import React from 'react';
import { Link } from 'react-router-dom';
import { FlowLayout } from '../../../components/layouts/flow-layout/flow-layout.tsx';
import { Card } from '../../../components/primitives/card/card.tsx';
import { GET_PATH } from '../../../routes.tsx';

export function AccountSelection() {
  return (
    <FlowLayout>
      <Card title="What type of account would you like?" description="You can open a new account in just 5 minutes.">
        <div className="space-y-2 first-child:border-t-slate-200">
          <Link
            to={`${GET_PATH.create_user}?type=cash`}
            className="text-gray-500 block hover:bg-purple-50 transform-[background-color] duration-100 ease-in p-4 pl-2 rounded-2xl"
          >
            I want to open a cash account.
          </Link>
          <div className="bg-slate-200 h-px w-full" />
          <Link
            to={`${GET_PATH.create_user}?type=investing`}
            className="text-gray-500 block hover:bg-purple-50 transform-[background-color] duration-100 ease-in p-4 pl-2 rounded-2xl"
          >
            I want to open an investing account.
          </Link>
        </div>
      </Card>
    </FlowLayout>
  );
}
