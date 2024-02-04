import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-transfer-money-modal',
  templateUrl: './transfer-money-modal.component.html',
  styleUrls: ['./transfer-money-modal.component.scss'],
})
export class TransferMoneyModalComponent {
  constructor(private modalRef: NzModalRef) {}

  onCancel() {
    this.modalRef.close();
  }
  onSave() {
    this.modalRef.close();
  }
}
