import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { products } from '../utils';

@Component({
  selector: 'app-deposit-management-list',
  templateUrl: './deposit-management-list.component.html',
  styleUrls: ['./deposit-management-list.component.scss'],
})
export class DepositManagementListComponent {
  @ViewChild('editProductTemp') editProductTemp: TemplateRef<any>;
  amount: number;
  products = products;

  editProduct: any;

  constructor(private modalSvc: NzModalService, private msgSvc: NzMessageService) {}

  onEditProduct(product) {
    this.editProduct = { ...product };
    this.modalSvc.create({
      nzTitle: '存款',
      nzContent: this.editProductTemp,
      nzOnOk: () => {
        if (!this.amount) {
          this.msgSvc.error('请输入购买金额');
          return false;
        }

        this.msgSvc.success('购买存款成功');
      },
      nzOnCancel: () => {
        this.editProduct = null;
      },
      nzOkText: '确定',
      nzCancelText: '取消',
    });
  }
}
