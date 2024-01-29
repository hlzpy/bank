import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditCustomerInfoModalComponent } from '../modal/edit-customer-info-modal/edit-customer-info-modal.component';
import { ICustomerInfo } from 'src/app/shared/models/customer-info';
import { UserService } from 'src/app/shared/services/user.service';
import { Keys, UserType } from 'src/app/shared/enums';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as _ from 'lodash';

@Component({
  selector: 'app-customer-info-home',
  templateUrl: './customer-info-home.component.html',
  styleUrls: ['./customer-info-home.component.scss'],
})
export class CustomerInfoHomeComponent implements OnInit {
  searchText: string;
  listOfData: ICustomerInfo[] = [];
  // for search cache
  cacheData: ICustomerInfo[] = [];

  constructor(private modalSvc: NzModalService, private userSvc: UserService, private msgSvc: NzMessageService) {}
  ngOnInit(): void {
    this.getUser();
  }

  search() {
    if (this.searchText) {
      this.listOfData = this.cacheData.filter((item: ICustomerInfo) => {
        return (
          item.userName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    } else {
      this.listOfData = _.cloneDeep(this.cacheData);
    }
  }

  /**
   * 删除
   */
  removeUser(id: string) {
    this.userSvc.removeUser(id).subscribe(() => {
      this.msgSvc.success('删除成功');
      this.getUser();
    });
  }

  /**
   * 新增/编辑
   */
  editCustomerInfo(info?: ICustomerInfo) {
    this.modalSvc.create({
      nzTitle: info ? '编辑用户' : '添加用户',
      nzContent: EditCustomerInfoModalComponent,
      nzData: {
        customerInfo: info,
      },
      nzWidth: 800,
      nzCancelText: '取消',
      nzOkText: '保存',
      nzOnOk: modal => {
        const {
          userName,
          password,
          confirmPassword,
          name,
          idNumber,
          phoneNumber,
          emailAddress,
          registrationDate,
          accountBalance,
          accountType,
          bankName,
          status,
        } = modal?.customerInfo;
        if (!userName) {
          this.msgSvc.error('请输入用户名');
          return false;
        }
        if (!password) {
          this.msgSvc.error('请输入密码');
          return false;
        }
        if (!confirmPassword) {
          this.msgSvc.error('请输入确认密码');
          return false;
        }
        if (password !== confirmPassword) {
          this.msgSvc.error('两次输入的密码不一致');
          return false;
        }
        if (!name) {
          this.msgSvc.error('请输入姓名');
          return false;
        }
        if (!idNumber) {
          this.msgSvc.error('请输入身份证号');
          return false;
        }
        if (!phoneNumber) {
          this.msgSvc.error('请输入手机号');
          return false;
        }
        if (!emailAddress) {
          this.msgSvc.error('请输入邮箱');
          return false;
        }
        if (!bankName) {
          this.msgSvc.error('请输入银行名称');
          return false;
        }

        if (!info) {
          this.userSvc.register({ ...modal?.customerInfo, userType: UserType.NormalUser } as any).subscribe({
            next: data => {
              this.msgSvc.success('新增成功');
              this.getUser();
            },
          });
          return;
        }
        // 编辑
        this.userSvc.editUser(info.id, modal?.customerInfo).subscribe({
          next: data => {
            this.msgSvc.success('编辑成功');
            this.getUser();
          },
          error: err => {
            this.msgSvc.error(err.message);
          },
        });
      },
    });
  }

  getUser() {
    this.userSvc.getUser(Keys.AllRegisteredUsers).subscribe({
      next: data => {
        this.listOfData = data
          ?.filter(item => item.userType === UserType.NormalUser)
          .map(item => {
            return {
              ...item,
              userName: item.userName,
              password: item.password,
              confirmPassword: item.password,
              name: item.name || item.userName,
              idNumber: item.idNumber,
              phoneNumber: item.phoneNumber,
              emailAddress: item.emailAddress,
              registrationDate: item.registrationDate,
              accountBalance: item.accountBalance || 0,
              accountType: '储蓄账户',
              bankName: item.bankName || '中国银行',
              status: '正常',
            };
          });
        this.cacheData = _.cloneDeep(this.listOfData);
      },
    });
  }
}
