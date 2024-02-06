import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { products } from 'src/app/deposit-management/utils';
import { ApplyStatusEnum } from 'src/app/shared/enums';
import * as _ from 'lodash';

@Component({
  selector: 'app-loan-management-approval-list',
  templateUrl: './loan-management-approval-list.component.html',
  styleUrls: ['./loan-management-approval-list.component.scss'],
})
export class LoanManagementApprovalListComponent {
  @ViewChild('approveTemp') approveTemp: TemplateRef<any>;

  searchParams = {
    searchText: null,
    dateRange: null,
    status: null,
  };
  listOfData = [];

  cacheData: any[] = [];
  applyStatusEnum = ApplyStatusEnum;
  // 是否审批通过
  isApprove: boolean = true;
  // 拒绝原因
  reasonForRejection: string;

  constructor(private modalSvc: NzModalService, private msgSvc: NzMessageService) {}

  ngOnInit(): void {
    this.listOfData = Array(100)
      .fill(1)
      .map((_, index) => {
        const id = Math.floor(Math.random() * 10);
        const mapKey = {
          0: ApplyStatusEnum.PENDING,
          1: ApplyStatusEnum.APPROVED,
          2: ApplyStatusEnum.REJECTED,
        };
        return {
          id: index + 1,
          name: `王${index + 1}`,
          applicationDate: '2024/02/08',
          amount: 10000 * (index + 1),
          type: '购房贷款',
          rate: 4.99,
          month: 30 * 12,
          status: mapKey[index % 3],
        };
      });
    this.cacheData = _.cloneDeep(this.listOfData);
  }

  search() {
    const { searchText, status } = this.searchParams;
    if (searchText || status) {
      this.listOfData = this.cacheData.filter((item: any) => {
        const isSearchText = searchText
          ? Object.values(item).some(v => typeof v === 'string' && v.includes(searchText))
          : true;
        let isType = true;
        if (status) {
          isType = item.status === status;
        }
        return isSearchText && isType;
      });
      return;
    }
    this.listOfData = _.cloneDeep(this.cacheData);
  }

  remove(id: number) {
    this.listOfData = this.listOfData.filter(item => item.id !== id);
    this.cacheData = _.cloneDeep(this.listOfData);
  }

  approve(data) {
    this.modalSvc.create({
      nzTitle: '贷款审批',
      nzContent: this.approveTemp,
      nzOkText: '确认',
      nzCancelText: '取消',
      nzOnOk: () => {
        if (!this.isApprove && !this.reasonForRejection) {
          this.msgSvc.success('请输入拒绝原因');
          return false;
        }
        if (!this.isApprove && this.reasonForRejection) {
          data.notes = this.reasonForRejection;
        }
        data.status = this.isApprove ? ApplyStatusEnum.APPROVED : ApplyStatusEnum.REJECTED;
        this.cacheData = _.cloneDeep(this.listOfData);
        this.msgSvc.success('保存成功');
      },
      nzOnCancel: () => {
        // this.msgSvc.error('已取消');
      },
    });
  }
}
