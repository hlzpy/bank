import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { v4 as uuid } from 'uuid';
import { LoanSettingModalComponent } from '../loan-setting-modal/loan-setting-modal.component';
import { allLoanProducts } from '../utils';
import * as _ from 'lodash';

@Component({
  selector: 'app-loan-setting',
  templateUrl: './loan-setting.component.html',
  styleUrls: ['./loan-setting.component.scss'],
})
export class LoanSettingComponent implements OnInit {
  searchText = '';

  allProducts = allLoanProducts.map(item => item);
  cacheAllProducts = [];

  constructor(private modalSvc: NzModalService, private msgSvc: NzMessageService) {}

  ngOnInit(): void {
    this.cacheAllProducts = _.cloneDeep(this.allProducts);
  }

  search() {
    if (!this.searchText) {
      this.allProducts = _.cloneDeep(this.cacheAllProducts);
    } else {
      this.allProducts = this.cacheAllProducts.filter(item => {
        return item.name.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
  }

  remove(id: string) {
    this.allProducts = this.allProducts.filter(item => item.id !== id);
    this.cacheAllProducts = _.cloneDeep(this.allProducts);
    this.msgSvc.success('删除成功');
  }

  edit(data?) {
    const modalRef = this.modalSvc.create({
      nzTitle: data ? '编辑贷款产品' : '新增贷款产品',
      nzContent: LoanSettingModalComponent,
      nzFooter: null,
      nzData: { product: data },
    });
    modalRef.afterClose.subscribe(res => {
      if (res) {
        if (!data) {
          this.allProducts = [res, ...this.allProducts];
        } else {
          data = res;
          this.allProducts = [...this.allProducts];
        }
        this.cacheAllProducts = _.cloneDeep(this.allProducts);
      }
    });
  }
}
