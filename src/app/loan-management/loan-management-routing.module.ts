import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanManagementListComponent } from './loan-management-list/loan-management-list.component';
import { LoanManagementApprovalListComponent } from './loan-management-approval-list/loan-management-approval-list.component';

const routes: Routes = [
  { path: 'list', component: LoanManagementListComponent },
  { path: 'approval-list', component: LoanManagementApprovalListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanManagementRoutingModule { }
