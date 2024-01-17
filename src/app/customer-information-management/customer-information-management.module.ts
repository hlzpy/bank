import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInformationManagementRoutingModule } from './customer-information-management-routing.module';
import { CustomerInfoHomeComponent } from './customer-info-home/customer-info-home.component';


@NgModule({
  declarations: [
    CustomerInfoHomeComponent
  ],
  imports: [
    CommonModule,
    CustomerInformationManagementRoutingModule
  ]
})
export class CustomerInformationManagementModule { }
