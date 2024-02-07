import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { IUser } from '../models';
import { Keys, UserType } from '../enums';
import { ICustomerInfo } from '../models/customer-info';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // 当前登录用户
  currentLoginUser: IUser;

  constructor() {}

  /**
   * 登录
   */
  login(data: IUser) {
    const { userName, password, userType } = data;
    const allUsers = this.getJsonParse(Keys.AllRegisteredUsers) || [];
    const currentUserType = allUsers.filter(item => item.userType === userType);
    if (currentUserType?.length === 0) {
      return throwError({ message: '该用户没有注册', state: 'error' });
    }
    const currentUser = currentUserType?.find(item => item.userName === userName && item.password === password);
    if (currentUser) {
      if (currentUser.status !== '正常') {
        return throwError({ message: '该用户已被禁用,请联系管理员', state: 'error' });
      }
      this.setCurrentUser({ ...currentUser });
      return of({ message: '登录成功', state: 'success' });
    }
    if (currentUserType?.find(item => item.userName !== userName)) {
      return throwError({ message: '该用户没有注册', state: 'error' });
    }
    const user = currentUserType?.find(item => item.userName === userName);
    if (user?.password !== password) {
      return throwError({ message: '密码错误', state: 'error' });
    }
  }

  /**
   * 注册
   */
  register(data: IUser) {
    const { userName, password, userType } = data;
    const allUsers = this.getJsonParse(Keys.AllRegisteredUsers) || [];
    const currentUserType = allUsers.filter(item => item.userType === userType);
    if (currentUserType?.length === 0 || !currentUserType?.some(item => item.userName === userName)) {
      localStorage.setItem(Keys.AllRegisteredUsers, JSON.stringify([...allUsers, { ...data, id: uuid(), balance: 1000000, status: '正常' }]));
      return of({ message: '注册成功', state: 'success' });
    }
    if (currentUserType?.some(item => item.userName === userName)) {
      return throwError({ message: '改用户已注册', state: 'error' });
    }
  }

  /**
   * 编辑用户
   */
  editUser(id: string, user: ICustomerInfo) {
    let allUsers = this.getJsonParse(Keys.AllRegisteredUsers) || [];
    const otherUsers = allUsers?.filter(item => item.userType === UserType.NormalUser && item.id !== id);

    const { userName } = user;
    if (otherUsers.some(item => item.userName === userName)) {
      return throwError({ message: '用户已注册', state: 'error' });
    }

    allUsers = allUsers.map(item => {
      if (item.id === id) {
        return { ...user };
      }
      return item;
    });

    localStorage.setItem(Keys.AllRegisteredUsers, JSON.stringify(allUsers));
    return of({ message: '编辑成功', state: 'success' });
  }

  removeUser(id: string) {
    const allUsers = this.getJsonParse(Keys.AllRegisteredUsers) || [];
    localStorage.setItem(Keys.AllRegisteredUsers, JSON.stringify(allUsers?.filter(item => item.id !== id)));
    return of({ message: '删除成功', state: 'success' });
  }

  getUser(key: string) {
    return of(this.getJsonParse(key));
  }

  setUser(key: string, data: any, validateFields?: string[] | string) {
    const allUsers = this.getJsonParse(key) || [];
    if (allUsers?.some(item => item.type === data?.type && item.userName === data?.userName)) {
      return of({ message: '用户已存在！', state: 'error' });
    }
    localStorage.setItem(key, JSON.stringify([...allUsers, { ...data, id: uuid() }]));
    return of({ message: '保存成功！', state: 'success' });
  }

  getJsonParse(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * 保存当前登录的用户
   */
  setCurrentUser(user: IUser) {
    localStorage.setItem(Keys.CurrentLoginUser, JSON.stringify(user));
    this.currentLoginUser = { ...user };
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem(Keys.CurrentLoginUser));
    this.setCurrentUser(user);
  }

  /**
   * 清除当前登录用户
   */
  clearCurrentUser() {
    localStorage.removeItem(Keys.CurrentLoginUser);
    this.currentLoginUser = null;
  }
}
