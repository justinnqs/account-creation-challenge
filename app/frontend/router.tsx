import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GET_PATH } from './routes.tsx';
import { CreateAccount } from './routes/create-account/create-account.tsx';
import { Root } from './routes/root/root.tsx';
import { AccountSelection } from './routes/signup/account-selection/account-selection.tsx';
import { CreateUser } from './routes/signup/create-user/create-user.tsx';
import { Deposit } from './routes/signup/deposit/deposit.tsx';
import { JointAccess } from './routes/signup/joint-access/joint-access.tsx';
import { StockRestrictions } from './routes/signup/stock-restrictions/stock-restrictions.tsx';

const router = createBrowserRouter([
  {
    path: GET_PATH.root,
    element: <Root />,
  },
  {
    path: GET_PATH.account_selection,
    element: <AccountSelection />,
  },
  {
    path: GET_PATH.create_user,
    element: <CreateUser />,
  },
  {
    path: GET_PATH.joint_access,
    element: <JointAccess />,
  },
  {
    path: GET_PATH.stock_restrictions,
    element: <StockRestrictions />,
  },
  {
    path: GET_PATH.deposit,
    element: <Deposit />,
  },
  {
    path: GET_PATH.create_account,
    element: <CreateAccount />,
  },
]);

export function Router() {
  return (
    <main className="h-screen w-screen">
      <div className="h-full w-full max-w-[1200px] my-0 mx-auto">
        <RouterProvider router={router} />
      </div>
    </main>
  );
}
