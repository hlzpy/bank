import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Route, Router } from "@angular/router";
import { UserType } from "../shared/enums";
import { UserService } from "../shared/services/user.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { IUser } from "../shared/models";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  confirmationValidator: ValidatorFn = (
    control: AbstractControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
    userType: FormControl<UserType>;
  }> = this.fb.group({
    userName: ["", [Validators.required]],
    password: ["", [Validators.required]],
    confirmPassword: ["", [Validators.required, this.confirmationValidator]],
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
    this.route.navigate(["/login"]);
  }

  register() {
    if (this.validateForm.valid) {
      console.log("submit", this.validateForm.value);
      const { confirmPassword, ...others } = this.validateForm.value;
      this.userSvc.register(others as IUser).subscribe({
        next: () => {
          this.login();
          this.msgSvc.success("注册成功， 请登录");
        },
        error: (error) => {
          this.msgSvc.error(error.message);
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
}
