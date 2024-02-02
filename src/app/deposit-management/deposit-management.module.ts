import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositManagementRoutingModule } from './deposit-management-routing.module';
import { DepositManagementListComponent } from './deposit-management-list/deposit-management-list.component';
import { DepositManagementApprovalListComponent } from './deposit-management-approval-list/deposit-management-approval-list.component';


@NgModule({
  declarations: [
    DepositManagementListComponent,
    DepositManagementApprovalListComponent
  ],
  imports: [
    CommonModule,
    DepositManagementRoutingModule
  ]
})
export class DepositManagementModule { }
