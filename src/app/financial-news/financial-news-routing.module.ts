import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FinancialNewsComponent } from "./financial-news.component";

const routes: Routes = [
  {
    path: "",
    component: FinancialNewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialNewsRoutingModule {}
