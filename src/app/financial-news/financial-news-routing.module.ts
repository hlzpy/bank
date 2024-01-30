import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FinancialNewsComponent } from "./financial-news.component";
import { FinancialNewsDetailComponent } from "./financial-news-detail/financial-news-detail.component";

const routes: Routes = [
  {
    path: "",
    component: FinancialNewsComponent,
  },
  {
    path: "detail",
    component: FinancialNewsDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialNewsRoutingModule {}
