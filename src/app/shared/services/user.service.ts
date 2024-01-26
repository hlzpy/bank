import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { IUser } from '../models';
import { Keys } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(data: IUser) {
    const { userName, password, userType } = data;
    const allUsers = this.getJsonParse(Keys.AllRegisteredUsers) || [];
    const currentUserType = allUsers.filter(item => item.userType === userType);
    if (currentUserType?.length === 0) {
      return throwError({ message: '该用户没有注册', state: 'error'});
    }
    if (currentUserType?.some(item => item.userName === userName && item.password === password)) {
      return of({ message: '登录成功', state: 'success'});
    }
    if (currentUserType?.find(item => item.userName !== userName)) {
      return throwError({ message: '该用户没有注册', state: 'error'});
    }
    const user = currentUserType?.find(item => item.userName === userName);
    if (user?.password !== password) {
      return throwError({ message: '密码错误', state: 'error'});
    }
  }

  register(data: IUser) {
    const { userName, password, userType } = data;
    const allUsers = this.getJsonParse(Keys.AllRegisteredUsers) || [];
    const currentUserType = allUsers.filter(item => item.userType === userType);
    if (currentUserType?.length === 0 || !currentUserType?.some(item => item.userName === userName)) {
      localStorage.setItem(Keys.AllRegisteredUsers, JSON.stringify([...allUsers, { ...data, id: uuid() }]));
      return of({ message: '注册成功', state: 'success'});
    }
    if (currentUserType?.some(item => item.userName === userName)) {
      return throwError({ message: '改用户已注册', state: 'error'});
    }
  }

  getUser(key: string) {
    return of(this.getJsonParse(key));
  };

  setUser(key: string, data: any, validateFields?: string[] | string) {
    const allUsers = this.getJsonParse(key) || [];
    if (allUsers?.some(item => item.type === data?.type && item.userName === data?.userName)) {
      return of({ message: '用户已存在！', state: 'error' });
    }
    localStorage.setItem(key, JSON.stringify([...allUsers, { ...data, id: uuid() }]));
    return of ({ message: '保存成功！', state: 'success' });
  }

  getJsonParse(key: string) {
    return JSON.parse(localStorage.getItem(key));
  };
}
