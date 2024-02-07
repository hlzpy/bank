import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditCustomerInfoModalComponent } from 'src/app/customer-information-management/modal/edit-customer-info-modal/edit-customer-info-modal.component';
import { UserType, Keys } from 'src/app/shared/enums';
import { ICustomerInfo } from 'src/app/shared/models/customer-info';
import { UserService } from 'src/app/shared/services/user.service';
import { defaultCustomerUser } from 'src/app/shared/utils';
import * as _ from 'lodash';

@Component({
  selector: 'app-safety-certification-list',
  templateUrl: './safety-certification-list.component.html',
  styleUrls: ['./safety-certification-list.component.scss'],
})
export class SafetyCertificationListComponent implements OnInit {
  searchText: string;
  state: string;
  listOfData: ICustomerInfo[] = [];
  // for search cache
  cacheData: ICustomerInfo[] = [];

  constructor(private modalSvc: NzModalService, private userSvc: UserService, private msgSvc: NzMessageService) {}
  ngOnInit(): void {
    this.getUser();
  }

  search() {
    if (this.searchText || this.state) {
      this.listOfData = this.cacheData.filter((item: ICustomerInfo) => {
        const isSearchText = this.searchText
          ? item.userName.toLowerCase().includes(this.searchText.toLowerCase()) ||
            item.name.toLowerCase().includes(this.searchText.toLowerCase())
          : true;
        let isType = true;
        if (this.state) {
          isType = item.status === this.state;
        }
        return isSearchText && isType;
      });
    } else {
      this.listOfData = _.cloneDeep(this.cacheData);
    }
  }

  editCustomerInfo(user: any, status: '正常' | '冻结') {
    this.userSvc.editUser(user.id, { ...user, status }).subscribe(() => {
      this.getUser();
      this.msgSvc.success(`${status}成功`);
    });
  }

  getUser() {
    this.userSvc.getUser(Keys.AllRegisteredUsers).subscribe({
      next: data => {
        const listOfData = data
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
            };
          });
        this.listOfData = [...listOfData, ...defaultCustomerUser.list];
        this.cacheData = _.cloneDeep(this.listOfData);
      },
    });
  }
}
