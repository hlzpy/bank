import { Component, OnInit, inject } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { v4 as uuid } from 'uuid';
import { allLoanProducts } from '../utils';
import { ApplyStatusEnum } from 'src/app/shared/enums';

@Component({
  selector: 'app-edit-my-loan-modal',
  templateUrl: './edit-my-loan-modal.component.html',
  styleUrls: ['./edit-my-loan-modal.component.scss'],
})
export class EditMyLoanModalComponent implements OnInit {
  readonly nzModalData: { loan: any } = inject(NZ_MODAL_DATA);

  allLoanProducts = allLoanProducts;
  selectLoanProduct = null;
  loan = {
    name: null,
    rate: null,
    amount: null,
    period: null,
    id: uuid(),
    state: ApplyStatusEnum.PENDING,
    date: new Date(),
  };

  constructor(private modalRef: NzModalRef, private msgSvc: NzMessageService) {}
  ngOnInit(): void {
    if (this.nzModalData.loan) {
      this.loan = this.nzModalData.loan;
    }
  }

  onCancel() {
    this.modalRef.close();
  }

  typeChange(id: string) {
    this.selectLoanProduct = this.allLoanProducts.find(item => item.id === id);
    this.loan.rate = this.selectLoanProduct.rate;
  }

  onSave() {
    const { name, rate, amount, period } = this.loan;
    if (!name) {
      this.msgSvc.error('产品名称必填');
      return;
    }
    if (!rate) {
      this.msgSvc.error('利率必填');
      return;
    }
    if (!amount) {
      this.msgSvc.error('贷款金额必填');
      return;
    }
    if (!period) {
      this.msgSvc.error('贷款期数金额必填');
      return;
    }

    this.modalRef.close(this.loan);
  }
}
