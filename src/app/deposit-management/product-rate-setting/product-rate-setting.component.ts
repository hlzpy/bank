import { Component, TemplateRef, ViewChild } from '@angular/core';
import { products } from '../utils';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-product-rate-setting',
  templateUrl: './product-rate-setting.component.html',
  styleUrls: ['./product-rate-setting.component.scss'],
})
export class ProductRateSettingComponent {
  @ViewChild('editProductTemp') editProductTemp: TemplateRef<any>;

  products = products.map(item => ({ ...item, rate: item.rate.replaceAll('%', '') }));

  editProduct: any;

  constructor(private modalSvc: NzModalService, private msgSvc: NzMessageService) {}

  onEditProduct(product) {
    this.editProduct = { ...product };
    this.modalSvc.create({
      nzTitle: '编辑产品',
      nzContent: this.editProductTemp,
      nzOnOk: () => {
        if (!this.editProduct.rate) {
          this.msgSvc.error('请输入利率');
          return false;
        }
        product.rate = this.editProduct.rate;
        product.description = this.editProduct.description;
        this.products = [...this.products];

        this.msgSvc.success('编辑成功');
        this.editProduct = null;
      },
      nzOnCancel: () => {
        this.editProduct = null;
      },
    });
  }
}
