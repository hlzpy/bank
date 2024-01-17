import { Route } from "@angular/router";

export const MODULE_DEFINITIONS: Route[] = [
  {
    path: "customer-info",
    loadChildren: () =>
      import(
        "../customer-information-management/customer-information-management.module"
      ).then((m) => m.CustomerInformationManagementModule),
  },
  {
    path: "loan",
    loadChildren: () =>
      import("../loan-management/loan-management.module").then(
        (m) => m.LoanManagementModule
      ),
  },
  {
    path: "news",
    loadChildren: () =>
      import("../financial-news/financial-news.module").then(
        (m) => m.FinancialNewsModule
      ),
  },
];
