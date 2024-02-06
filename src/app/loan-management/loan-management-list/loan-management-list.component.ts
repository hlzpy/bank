import { Component, OnInit } from '@angular/core';
import { allLoanProducts } from '../utils';
import { v4 as uuid } from 'uuid';
import { ApplyStatusEnum } from 'src/app/shared/enums';
import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditMyLoanModalComponent } from '../edit-my-loan-modal/edit-my-loan-modal.component';
import { MyPlanModalComponent } from '../my-plan-modal/my-plan-modal.component';

@Component({
  selector: 'app-loan-management-list',
  templateUrl: './loan-management-list.component.html',
  styleUrls: ['./loan-management-list.component.scss'],
})
export class LoanManagementListComponent implements OnInit {
  searchParams = {
    searchText: null,
    state: null,
  };
  applyStatusEnum = ApplyStatusEnum;
  myLoanList = [];
  cacheData: any[] = [];

  constructor(private modalSvc: NzModalService, private msgSvc: NzMessageService) {}

  ngOnInit(): void {
    this.myLoanList = allLoanProducts.map((item, index) => {
      return {
        name: item.name,
        rate: item.rate,
        amount: item.maxAmount,
        period: item.maxPeriod,
        id: uuid(),
        state: index === 3 ? ApplyStatusEnum.REJECTED : ApplyStatusEnum.APPROVED,
        date: '2024-01-12',
      };
    });
    this.cacheData = _.cloneDeep(this.myLoanList);
  }

  search() {
    const { searchText, state } = this.searchParams;
    if (searchText || state) {
      this.myLoanList = this.cacheData.filter((item: any) => {
        const isSearchText = searchText
          ? Object.values(item).some(v => typeof v === 'string' && v.includes(searchText))
          : true;
        let isType = true;
        if (state) {
          isType = item.state === state;
        }
        return isSearchText && isType;
      });
      return;
    }
    this.myLoanList = _.cloneDeep(this.cacheData);
  }

  remove(id: string) {
    this.myLoanList = this.myLoanList.filter(item => item.id !== id);
    this.cacheData = _.cloneDeep(this.myLoanList);
  }

  edit(data?) {
    const modalRef = this.modalSvc.create({
      nzTitle: data ? '编辑贷款' : '申请贷款',
      nzContent: EditMyLoanModalComponent,
    });
    modalRef.afterClose.subscribe((res: any) => {
      if (res) {
        if (!data) {
          this.myLoanList = [res, ...this.myLoanList];
        } else {
          data = res;
          this.myLoanList = [...this.myLoanList];
        }
        this.cacheData = _.cloneDeep(this.myLoanList);
      }
    });
  }

  plan(data) {
     this.modalSvc.create({
      nzTitle: '还款明细表',
      nzContent: MyPlanModalComponent,
      nzWidth: 800,
      nzData: data,
      nzOkText: null,
      nzCancelText: '关闭',
    });
  }
}
