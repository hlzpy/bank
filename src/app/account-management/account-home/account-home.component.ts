import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserService } from 'src/app/shared/services/user.service';
import { BuyYieldModalComponent } from '../buy-yield-modal/buy-yield-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss'],
})
export class AccountHomeComponent {
  isShow = false;
  commonFunctions = [
    { label: '转账', src: './assets/img_transfer.png' },
    { label: '账户查询', src: './assets/img_query_account.png' },
    { label: '基金', src: './assets/img_fund.png' },
    { label: '理财资讯', src: './assets/img_finance.png' },
    { label: '缴费', src: './assets/img_pay-fee.png' },
  ];
  financialProducts = [
    {
      name: '年年鑫最短持有期（零售专属）',
      describe: '365天后可赎',
      describeBuy: '1元起购',
      yieldFinance: '4.47％',
      yieldName: '近半年年化',
      id: 1,
    },
    {
      name: '广发道琼斯美国石油开发与生产指数证券投',
      describe: '1年',
      describeBuy: '1元起购',
      yieldFinance: '6.63%',
      yieldName: '近一年收益率',
      id: 2,
    },
    {
      name: '2024年第5期日元三层Y计划',
      describe: '1年',
      describeBuy: '1万元起购',
      yieldFinance: '1.65%或2.5%或2.7%',
      yieldName: '预计年化收益率',
      id: 3,
    },
  ];

  constructor(
    public userSvc: UserService,
    private modalSvc: NzModalService,
    private msgSvc: NzMessageService,
    private router: Router,
  ) {}

  moneyEye() {
    this.isShow = !this.isShow;
  }

  buyYield(item) {
    this.modalSvc.create({
      nzTitle: `购买 ${item.name} 产品`,
      nzContent: BuyYieldModalComponent,
      nzData: {
        params: item,
      },
      nzWidth: 1200,
      nzOkText: '确认购买',
      nzCancelText: '取消',
      nzOnOk: instance => {
        if (!instance.value) {
          this.msgSvc.error('请输入金额');
          return false;
        }
        if (instance.value) {
          this.msgSvc.success('购买成功，祝你收益远超预期');
        }
      },
      nzOnCancel: () => {
        console.log('cancel');
      },
    });
  }

  goToPage(name) {
    if (name === '账户查询') {
      this.router.navigate(['/account/transaction-detail']);
      return;
    }
    if (name === '理财咨询') {
      this.router.navigate(['/news']);
      return;
    }
  }
}
