import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Keys } from '../enums';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferMoneyService {
  transferKey = '';
  constructor(private userSvc: UserService) {
    this.transferKey = `${this.userSvc.currentLoginUser.id}-${Keys.TransferMoney}`;
  }

  saveTransferMoney(data: any) {
    let allData = [];
    try {
      allData = JSON.parse(localStorage.getItem(this.transferKey)) || [];
    } catch (error) {
      console.log(error);
    }
    localStorage.setItem(this.transferKey, JSON.stringify([data,...allData]));
  }

  getTransferMoney() {
    let allData = [];
    try {
      allData = JSON.parse(localStorage.getItem(this.transferKey)) || [];
    } catch (error) {
      console.log(error);
    }
    return of(allData);
  }
}
