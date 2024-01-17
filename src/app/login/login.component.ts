import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor() {}

  ngOnInit() {
    // 从浏览器缓存中获取用户登录信息
    const cachedUsername = localStorage.getItem('username');
    const cachedPassword = localStorage.getItem('password');

    if (cachedUsername && cachedPassword) {
      this.username = cachedUsername;
      this.password = cachedPassword;
      this.login();
    }
  }

  login() {
    // 执行实际的登录逻辑
    // ...

    // 如果登录成功，将用户登录信息保存到浏览器缓存中
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
  }
}
