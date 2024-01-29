import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Route, Router } from "@angular/router";
import { UserType } from "../shared/enums";
import { UserService } from "../shared/services/user.service";
import { IUser } from "../shared/models";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    userType: FormControl<UserType>;
  }> = this.fb.group({
    userName: ["", [Validators.required]],
    password: ["", [Validators.required]],
    userType: [UserType.NormalUser, [Validators.required]],
  });

  userTypes = [UserType.NormalUser, UserType.Admin, UserType.BankInstitution];

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userSvc: UserService,
    private msgSvc: NzMessageService
  ) {}

  ngOnInit() {}

  login(): void {
    if (this.validateForm.valid) {
      console.log("submit", this.validateForm.value);
      this.userSvc.login(this.validateForm.value as IUser).subscribe({
        next: (data) => {
          if (data.state === "success") {
            this.msgSvc.success("登录成功！");
            this.route.navigate(["/"]);
            this.userSvc.setCurrentUser(this.validateForm.value as IUser);
          }
        },
        error: (error) => {
          this.msgSvc.error(error?.message);
        },
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  register() {
    this.route.navigate(["/register"]);
  }
}
