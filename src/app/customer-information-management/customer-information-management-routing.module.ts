import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoHomeComponent } from './customer-info-home/customer-info-home.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerInfoHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerInformationManagementRoutingModule { }
