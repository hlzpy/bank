import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { UserType } from '../shared/enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  navList = [
    {
      title: '账户管理',
      icon: 'dashboard',
      routerLink: null,
      isOpen: true,
      accountTypes: [UserType.NormalUser],
      children: [
        {
          title: '我的账户',
          routerLink: '/account/home',
          accountTypes: [UserType.NormalUser],
        },
        {
          title: '交易明细',
          routerLink: '/account/transaction-detail',
          accountTypes: [UserType.NormalUser],
        },
      ],
    },
    {
      title: '客户信息管理',
      icon: 'info-circle',
      routerLink: null,
      isOpen: false,
      accountTypes: [UserType.Admin, UserType.BankInstitution],
      children: [
        {
          title: '客户信息列表',
          routerLink: '/customer-info',
          accountTypes: [UserType.Admin, UserType.BankInstitution],
        },
      ],
    },
    // {
    //   title: '普通银行账户管理',
    //   icon: 'bank',
    //   routerLink: null,
    //   isOpen: false,
    //   children: [
    //     {
    //       title: '客户账号列表',
    //       routerLink: '/customer-account-info/customer-account-list',
    //     },
    //   ],
    // },
    {
      title: '贷款管理',
      icon: 'money-collect',
      routerLink: null,
      isOpen: false,
      accountTypes: [UserType.NormalUser, UserType.Admin, UserType.BankInstitution],
      children: [
        {
          title: '我的贷款',
          routerLink: '/loan/list',
          accountTypes: [UserType.NormalUser],
        },
        {
          title: '贷款产品设置',
          routerLink: '/loan/loan-setting',
          accountTypes: [UserType.Admin, UserType.BankInstitution],
        },
        {
          title: '贷款审批列表',
          routerLink: '/loan/approval-list',
          accountTypes: [UserType.Admin, UserType.BankInstitution],
        },
      ],
    },
    {
      title: '存款管理',
      icon: 'pay-circle',
      routerLink: null,
      isOpen: false,
      accountTypes: [UserType.NormalUser, UserType.Admin, UserType.BankInstitution],

      children: [
        {
          title: '存款列表',
          routerLink: '/deposit/list',
          accountTypes: [UserType.NormalUser],
        },
        {
          title: '存款利率设置',
          routerLink: '/deposit/rate-setting',
          accountTypes: [UserType.Admin, UserType.BankInstitution],
        },
        {
          title: '存款审批列表',
          routerLink: '/deposit/approval-list',
          accountTypes: [UserType.Admin, UserType.BankInstitution],
        },
      ],
    },
    {
      title: '理财资讯',
      icon: 'dollar-circle',
      routerLink: 'news',
      isOpen: false,
      accountTypes: [UserType.NormalUser, UserType.Admin, UserType.BankInstitution],
    },
    {
      title: '安全认证',
      icon: 'cloud',
      routerLink: 'safety',
      isOpen: false,
      accountTypes: [UserType.Admin, UserType.BankInstitution],
    },
  ];

  constructor(public userSvc: UserService, private router: Router) {}

  ngOnInit(): void {
    const userType = this.userSvc.currentLoginUser.userType;
    this.navList = this.navList
      .filter(item => item.accountTypes.includes(userType))
      .map(item => {
        if (item.children?.length) {
          return {
            ...item,
            children: item.children
              .filter(child => child.accountTypes.includes(userType))
              .map(nav => ({
                ...nav,
                title: userType === UserType.Admin ? nav.title.replace('设置', '查看') : nav.title,
              })),
          };
        }
        return item;
      });
  }

  logout() {
    this.userSvc.clearCurrentUser();
    this.router.navigate(['/login']);
  }
}
