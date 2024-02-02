import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerAccountManagementRoutingModule } from './customer-account-management-routing.module';
import { CustomerAccountListComponent } from './customer-account-list/customer-account-list.component';


@NgModule({
  declarations: [
    CustomerAccountListComponent
  ],
  imports: [
    CommonModule,
    CustomerAccountManagementRoutingModule
  ]
})
export class CustomerAccountManagementModule { }
