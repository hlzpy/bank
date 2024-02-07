import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafetyCertificationRoutingModule } from './safety-certification-routing.module';
import { SafetyCertificationListComponent } from './safety-certification-list/safety-certification-list.component';
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
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [
    SafetyCertificationListComponent
  ],
  imports: [
    CommonModule,
    SafetyCertificationRoutingModule,
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
    NzPopconfirmModule,
  ]
})
export class SafetyCertificationModule { }
