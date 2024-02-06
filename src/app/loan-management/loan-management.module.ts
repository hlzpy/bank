import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanManagementRoutingModule } from './loan-management-routing.module';
import { LoanManagementListComponent } from './loan-management-list/loan-management-list.component';
import { LoanManagementApprovalListComponent } from './loan-management-approval-list/loan-management-approval-list.component';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { LoanSettingComponent } from './loan-setting/loan-setting.component';
import { LoanSettingModalComponent } from './loan-setting-modal/loan-setting-modal.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { EditMyLoanModalComponent } from './edit-my-loan-modal/edit-my-loan-modal.component';
import { MyPlanModalComponent } from './my-plan-modal/my-plan-modal.component';


@NgModule({
  declarations: [
    LoanManagementListComponent,
    LoanManagementApprovalListComponent,
    LoanSettingComponent,
    LoanSettingModalComponent,
    EditMyLoanModalComponent,
    MyPlanModalComponent
  ],
  imports: [
    CommonModule,
    LoanManagementRoutingModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzModalModule,
    NzToolTipModule,
    NzIconModule,
    NzInputNumberModule,
    FormsModule,
    NzMessageModule,
    NzTableModule,
    NzSelectModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzTagModule,
    NzSwitchModule,
    NzRadioModule,
    NzInputModule,
    NzPopconfirmModule,
  ]
})
export class LoanManagementModule { }
