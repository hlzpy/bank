import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialNewsRoutingModule } from './financial-news-routing.module';
import { FinancialNewsComponent } from './financial-news.component';


@NgModule({
  declarations: [
    FinancialNewsComponent
  ],
  imports: [
    CommonModule,
    FinancialNewsRoutingModule
  ]
})
export class FinancialNewsModule { }
