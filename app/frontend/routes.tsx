const routerPathsMap = {
  root: {
    path: '/',
  },
  account_selection: {
    path: '/signup/account-selection',
  },
  create_user: {
    path: '/signup/create-user',
  },
  joint_access: {
    path: '/signup/joint-access',
  },
  stock_restrictions: {
    path: '/signup/stock-restrictions',
  },
  deposit: {
    path: '/signup/deposit',
  },
  create_account: {
    path: '/create-account',
  },
} as const;

type routerPathKey = keyof typeof routerPathsMap;

export const GET_PATH = Object.keys(routerPathsMap).reduce(
  (prev, key) => Object.assign(prev, { [key]: routerPathsMap[key as routerPathKey].path }),
  {} as Readonly<Record<routerPathKey, string>>
);
