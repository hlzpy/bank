import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor() { }

  getUser(key: string) {
    return of(this.getJsonParse(key));
  };

  setUser(key: string, data: any, validateFields?: string[] | string) {
    const allUsers = this.getJsonParse(key) || [];
    if (allUsers?.some(item => item.type === data?.type && item.userName === data?.userName)) {
      return of({ message: '用户已存在！', type: 'error' });
    }
    localStorage.setItem(key, JSON.stringify([...allUsers, { ...data, id: uuid() }]));
    return of ({ message: '保存成功！', type: 'success' });
  }

  getJsonParse(key: string) {
    return JSON.parse(localStorage.getItem(key));
  };


}
