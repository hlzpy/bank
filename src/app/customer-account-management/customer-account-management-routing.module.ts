import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAccountListComponent } from './customer-account-list/customer-account-list.component';

const routes: Routes = [{ path: 'customer-account-list', component: CustomerAccountListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerAccountManagementRoutingModule {}
