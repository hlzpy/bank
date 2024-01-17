import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanManagementListComponent } from './loan-management-list/loan-management-list.component';

const routes: Routes = [
  { path: 'list', component: LoanManagementListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanManagementRoutingModule { }
