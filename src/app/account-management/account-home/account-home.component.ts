import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserService } from 'src/app/shared/services/user.service';
import { BuyYieldModalComponent } from '../buy-yield-modal/buy-yield-modal.component';
import { Router } from '@angular/router';
import { TransferMoneyModalComponent } from '../transfer-money-modal/transfer-money-modal.component';
import Mock from 'mockjs';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss'],
})
export class AccountHomeComponent implements OnInit {
  isShow = false;
  commonFunctions = [
    { label: '转账', src: './assets/img_transfer.png' },
    { label: '交易记录', src: './assets/img_query_account.png' },
    { label: '理财资讯', src: './assets/img_finance.png' },
    { label: '贷款管理', src: './assets/img_fund.png' },
    { label: '存款管理', src: './assets/img_pay-fee.png' },
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

  customerNumber: number;

  constructor(
    public userSvc: UserService,
    private modalSvc: NzModalService,
    private msgSvc: NzMessageService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.customerNumber = Mock.mock({
      'number|10': /\d/,
    }).number;
  }

  moneyEye() {
    this.isShow = !this.isShow;
  }

  /**
   * 购买理财
   */
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
    if (name === '交易记录') {
      this.router.navigate(['/account/transaction-detail']);
      return;
    }
    if (name === '理财资讯') {
      this.router.navigate(['/news']);
      return;
    }
    if (name === '贷款管理') {
      this.router.navigate(['/loan/list']);
      return;
    }
    if (name === '存款管理') {
      this.router.navigate(['/deposit/list']);
      return;
    }
    if (name === '转账') {
      this.transferMoney();
      return;
    }
  }

  // 转账
  transferMoney() {
    this.modalSvc.create({
      nzTitle: '转账',
      nzContent: TransferMoneyModalComponent,
      nzFooter: null,
      nzWidth: 600,
      // nzOkText: '确认转账',
      // nzCancelText: '取消',
      // nzOnOk: instance => {
      //   if (!instance.value) {
      //     this.msgSvc.error('请输入金额');
      //     return false;
      //   }
      // },
    });
  }
}
