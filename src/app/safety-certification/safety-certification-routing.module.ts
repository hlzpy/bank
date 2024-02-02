import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SafetyCertificationListComponent } from './safety-certification-list/safety-certification-list.component';

const routes: Routes = [
  { path: '', component: SafetyCertificationListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafetyCertificationRoutingModule { }
