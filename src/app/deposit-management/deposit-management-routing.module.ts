import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositManagementApprovalListComponent } from './deposit-management-approval-list/deposit-management-approval-list.component';
import { DepositManagementListComponent } from './deposit-management-list/deposit-management-list.component';

const routes: Routes = [
  { path: 'list', component: DepositManagementListComponent },
  { path: 'approval-list', component: DepositManagementApprovalListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositManagementRoutingModule { }
