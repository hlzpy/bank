import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInformationManagementRoutingModule } from './customer-information-management-routing.module';
import { CustomerInfoHomeComponent } from './customer-info-home/customer-info-home.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EditCustomerInfoModalComponent } from './modal/edit-customer-info-modal/edit-customer-info-modal.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';


@NgModule({
  declarations: [
    CustomerInfoHomeComponent,
    EditCustomerInfoModalComponent
  ],
  imports: [
    CommonModule,
    CustomerInformationManagementRoutingModule,
    FormsModule,
    NzModalModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzGridModule,
    NzPopconfirmModule,
  ]
})
export class CustomerInformationManagementModule { }
