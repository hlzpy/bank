import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BuyYieldModalComponent } from './buy-yield-modal/buy-yield-modal.component';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isShow = false;

  financialProducts = [
    {
      name: "年年鑫最短持有期（零售专属）",
      describe: "365天后可赎",
      describeBuy: "1元起购",
      yieldFinance: "4.47％",
      yieldName: "近半年年化",
      id: 1,
    },
    {
      name: "广发道琼斯美国石油开发与生产指数证券投",
      describe: "1年",
      describeBuy: "1元起购",
      yieldFinance: "6.63%",
      yieldName: "近一年收益率",
      id: 2,
    },
    {
      name: "2024年第5期日元三层Y计划",
      describe: "1年",
      describeBuy: "1万元起购",
      yieldFinance: "1.65%或2.5%或2.7%",
      yieldName: "预计年化收益率",
      id: 3,
    },
  ];

  constructor(public userSvc: UserService, private modalSvc: NzModalService, private msgSvc: NzMessageService) {}

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
}
