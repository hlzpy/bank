import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

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
      children: [
        {
          title: '我的账户',
          routerLink: '/account/home',
        },
        {
          title: '交易明细',
          routerLink: '/account/transaction-detail',
        },
      ],
    },
    {
      title: '客户信息管理',
      icon: 'info-circle',
      routerLink: null,
      isOpen: false,
      children: [
        {
          title: '客户信息列表',
          routerLink: '/customer-info',
        },
      ],
    },
    {
      title: '普通银行账户管理',
      icon: 'bank',
      routerLink: null,
      isOpen: false,
      children: [
        {
          title: '客户账号列表',
          routerLink: '/customer-account-info/customer-account-list',
        },
      ],
    },
    {
      title: '贷款管理',
      icon: 'money-collect',
      routerLink: null,
      isOpen: false,
      children: [
        {
          title: '贷款列表',
          routerLink: '/loan/list',
        },
        {
          title: '贷款审批列表',
          routerLink: '/loan/approval-list',
        },
      ],
    },
    {
      title: '存款管理',
      icon: 'pay-circle',
      routerLink: null,
      isOpen: false,
      children: [
        {
          title: '存款列表',
          routerLink: '/deposit/list',
        },
        {
          title: '存款利率设置',
          routerLink: '/deposit/rate-setting',
        },
        {
          title: '存款审批列表',
          routerLink: '/deposit/approval-list',
        },
      ],
    },
    {
      title: '理财资讯',
      icon: 'dollar-circle',
      routerLink: 'news',
      isOpen: false,
    },
    {
      title: '安全认证',
      icon: 'cloud',
      routerLink: 'safety',
      isOpen: false,
    },
  ];

  constructor(public userSvc: UserService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.userSvc.clearCurrentUser();
    this.router.navigate(['/login']);
  }
}
