import { Component } from '@angular/core';

@Component({
  selector: 'app-financial-news-detail',
  templateUrl: './financial-news-detail.component.html',
  styleUrls: ['./financial-news-detail.component.scss'],
})
export class FinancialNewsDetailComponent {
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false,
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2',
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3',
    },
  ];
}
