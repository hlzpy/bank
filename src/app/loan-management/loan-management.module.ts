import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanManagementRoutingModule } from './loan-management-routing.module';
import { LoanManagementListComponent } from './loan-management-list/loan-management-list.component';


@NgModule({
  declarations: [
    LoanManagementListComponent
  ],
  imports: [
    CommonModule,
    LoanManagementRoutingModule
  ]
})
export class LoanManagementModule { }
