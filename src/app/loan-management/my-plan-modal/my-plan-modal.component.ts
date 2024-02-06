import { Component, OnInit, inject } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-my-plan-modal',
  templateUrl: './my-plan-modal.component.html',
  styleUrls: ['./my-plan-modal.component.scss'],
})
export class MyPlanModalComponent implements OnInit {
  readonly loan: any = inject(NZ_MODAL_DATA);
  repaymentPlan = [];
  ngOnInit(): void {
    const { amount, period, rate, date } = this.loan;
    // 获取贷款金额、贷款期限、贷款日期和贷款利率
    const loanAmount = amount; // 贷款金额
    const loanTerm = period; // 贷款期限（月）
    const loanDate = new Date(date); // 贷款日期
    const interestRate = rate; // 贷款利率

    // 计算每月还款额
    const monthlyInterestRate = interestRate / 12; // 月利率
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));

    const list = [];
    // 生成还款计划列表
    let remainingBalance = loanAmount;
    for (let i = 1; i <= loanTerm; i++) {
      const interestPayment = remainingBalance * monthlyInterestRate; // 当月利息
      const principalPayment = monthlyPayment - interestPayment; // 当月本金
      const date = new Date(loanDate.getFullYear(), loanDate.getMonth() + i, loanDate.getDate()); // 当期还款日期
      remainingBalance -= principalPayment; // 剩余本金

      list.push({
        installment: i, // 期数
        date: date.toLocaleDateString(), // 还款日期
        principalPayment: principalPayment.toFixed(2), // 本金
        interestPayment: interestPayment.toFixed(2), // 利息
        remainingBalance: remainingBalance.toFixed(2), // 剩余本金
      });
    }

    this.repaymentPlan = list;
  }

}
