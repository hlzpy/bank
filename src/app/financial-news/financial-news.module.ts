import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialNewsRoutingModule } from './financial-news-routing.module';
import { FinancialNewsComponent } from './financial-news.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FinancialNewsDetailComponent } from './financial-news-detail/financial-news-detail.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@NgModule({
  declarations: [FinancialNewsComponent, FinancialNewsDetailComponent],
  imports: [CommonModule, FinancialNewsRoutingModule, NzCarouselModule, NzGridModule, NzCollapseModule],
})
export class FinancialNewsModule {}
