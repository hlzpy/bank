import { Component, Input, OnInit, inject } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { ICustomerInfo } from 'src/app/shared/models/customer-info';

@Component({
  selector: 'app-edit-customer-info-modal',
  templateUrl: './edit-customer-info-modal.component.html',
  styleUrls: ['./edit-customer-info-modal.component.scss'],
})
export class EditCustomerInfoModalComponent implements OnInit {
  readonly nzModalData: { customerInfo: ICustomerInfo } = inject(NZ_MODAL_DATA);

  customerInfo: ICustomerInfo = {
    userName: '',
    name: '',
    idNumber: '',
    phoneNumber: '',
    emailAddress: '',
    registrationDate: '',
    accountBalance: '',
    accountType: '',
    bankName: '中国银行',
    status: '',
  };

  ngOnInit(): void {
    this.customerInfo = this.nzModalData.customerInfo || this.customerInfo;
  }
}
