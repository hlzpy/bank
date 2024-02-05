import { Component } from '@angular/core';
import dayjs from 'dayjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Keys } from 'src/app/shared/enums';
import { TransferMoneyService } from 'src/app/shared/services/transfer-money.service';
import { UserService } from 'src/app/shared/services/user.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-transfer-money-modal',
  templateUrl: './transfer-money-modal.component.html',
  styleUrls: ['./transfer-money-modal.component.scss'],
})
export class TransferMoneyModalComponent {
  params = {
    counterPartyName: null,
    counterPartyAccount: null,
    bank: null,
    takeOutAmount: null,
    notes: null,
  };
  banks = [
    { name: '中国工商银行', code: 'ICBC' },
    { name: '中国农业银行', code: 'ABC' },
    { name: '中国银行', code: 'BOC' },
    { name: '中国建设银行', code: 'CCB' },
    { name: '交通银行', code: 'BCM' },
    { name: '中信银行', code: 'CITIC' },
    { name: '中国光大银行', code: 'CEB' },
    { name: '华夏银行', code: 'HXB' },
    { name: '中国民生银行', code: 'CMBC' },
    { name: '广发银行', code: 'CGB' },
    // 其他银行...
  ];

  constructor(
    private modalRef: NzModalRef,
    private userSvc: UserService,
    private msgSvc: NzMessageService,
    private transferMoneySvc: TransferMoneyService,
  ) {}

  onCancel() {
    this.modalRef.close();
  }

  onSave() {
    const { counterPartyName, counterPartyAccount, bank, takeOutAmount } = this.params;
    if (!counterPartyName) {
      this.msgSvc.error('请输入收款用户名称');
      return;
    }
    if (!counterPartyAccount) {
      this.msgSvc.error('请输入收款账号');
      return;
    }
    if (!bank) {
      this.msgSvc.error('请输入收款方银行');
      return;
    }
    if (!takeOutAmount) {
      this.msgSvc.error('请输入转出金额');
      return;
    }
    const balance = this.userSvc.currentLoginUser.balance - takeOutAmount;
    if (balance < 0) {
      this.msgSvc.error('余额不足');
      return;
    }
    this.transferMoneySvc.saveTransferMoney({
      ...this.params,
      tradingDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      tradingType: '互联网汇出',
      balance,
      id: uuid(),
    })
    this.userSvc.currentLoginUser.balance = balance;
    this.userSvc.editUser(this.userSvc.currentLoginUser.id, this.userSvc.currentLoginUser as any);
    this.modalRef.close();
  }
}

