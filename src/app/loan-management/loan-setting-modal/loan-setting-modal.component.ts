import { Component, OnInit, inject } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-loan-setting-modal',
  templateUrl: './loan-setting-modal.component.html',
  styleUrls: ['./loan-setting-modal.component.scss'],
})
export class LoanSettingModalComponent implements OnInit {
  readonly nzModalData: { product: any } = inject(NZ_MODAL_DATA);
  product = {
    name: null,
    rate: null,
    minAmount: null,
    maxAmount: null,
    minPeriod: null,
    maxPeriod: null,
    id: uuid(),
  };

  constructor(private modalRef: NzModalRef, private msgSvc: NzMessageService) {}
  ngOnInit(): void {
    if (this.nzModalData.product) {
      this.product = this.nzModalData.product;
    }
  }

  onCancel() {
    this.modalRef.close();
  }

  onSave() {
    const { name, rate, minAmount, maxAmount, minPeriod, maxPeriod } = this.product;
    if (!name) {
      this.msgSvc.error('产品名称必填');
      return;
    }
    if (!rate) {
      this.msgSvc.error('利率必填');
      return;
    }
    if (!minAmount) {
      this.msgSvc.error('最小贷款金额必填');
      return;
    }
    if (!maxAmount) {
      this.msgSvc.error('最大贷款金额必填');
      return;
    }
    if (minAmount > maxAmount) {
      this.msgSvc.error('最大贷款金额要大于最大贷款金额');
      return;
    }
    if (!minPeriod) {
      this.msgSvc.error('最小贷款期限必填');
      return;
    }
    if (!maxPeriod) {
      this.msgSvc.error('最大贷款期限必填');
      return;
    }
    if (minPeriod > maxPeriod) {
      this.msgSvc.error('最大贷款期限要大于最大贷款期限');
      return;
    }
    this.modalRef.close(this.product);
  }
}
