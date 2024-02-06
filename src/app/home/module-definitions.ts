import { Route } from "@angular/router";

export const MODULE_DEFINITIONS: Route[] = [
  {
    path: 'account',
    loadChildren: () => import('../account-management/account-management.module').then(m => m.AccountManagementModule),
  },
  {
    path: 'customer-info',
    loadChildren: () =>
      import('../customer-information-management/customer-information-management.module').then(
        m => m.CustomerInformationManagementModule,
      ),
  },
  // {
  //   path: 'customer-info',
  //   loadChildren: () =>
  //     import('../customer-information-management/customer-information-management.module').then(
  //       m => m.CustomerInformationManagementModule,
  //     ),
  // },
  {
    path: 'customer-account-info',
    loadChildren: () =>
      import('../customer-account-management/customer-account-management.module').then(
        m => m.CustomerAccountManagementModule,
      ),
  },
  {
    path: 'loan',
    loadChildren: () => import('../loan-management/loan-management.module').then(m => m.LoanManagementModule),
  },
  {
    path: 'news',
    loadChildren: () => import('../financial-news/financial-news.module').then(m => m.FinancialNewsModule),
  },
  {
    path: 'deposit',
    loadChildren: () => import('../deposit-management/deposit-management.module').then(m => m.DepositManagementModule),
  },
  {
    path: 'safety',
    loadChildren: () => import('../safety-certification/safety-certification.module').then(m => m.SafetyCertificationModule),
  },
];
