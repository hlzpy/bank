import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanManagementListComponent } from './loan-management-list/loan-management-list.component';
import { LoanManagementApprovalListComponent } from './loan-management-approval-list/loan-management-approval-list.component';
import { LoanSettingComponent } from './loan-setting/loan-setting.component';

const routes: Routes = [
  { path: 'list', component: LoanManagementListComponent },
  { path: 'approval-list', component: LoanManagementApprovalListComponent },
  { path: 'loan-setting', component: LoanSettingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanManagementRoutingModule { }
