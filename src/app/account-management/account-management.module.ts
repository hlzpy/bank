import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagementRoutingModule } from './account-management-routing.module';
import { AccountHomeComponent } from './account-home/account-home.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { BuyYieldModalComponent } from './buy-yield-modal/buy-yield-modal.component';


@NgModule({
  declarations: [
    AccountHomeComponent,
    TransactionDetailComponent,
    BuyYieldModalComponent
  ],
  imports: [
    CommonModule,
    AccountManagementRoutingModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzModalModule,
    NzToolTipModule,
    NzIconModule,
    NzInputNumberModule,
    FormsModule,
    NzMessageModule,
  ]
})
export class AccountManagementModule { }
