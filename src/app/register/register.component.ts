import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  register() {
    // 执行实际的注册逻辑
    // ...

    // 将用户注册信息保存到浏览器缓存中
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
  }
}
