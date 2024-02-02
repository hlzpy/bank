import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafetyCertificationRoutingModule } from './safety-certification-routing.module';
import { SafetyCertificationListComponent } from './safety-certification-list/safety-certification-list.component';


@NgModule({
  declarations: [
    SafetyCertificationListComponent
  ],
  imports: [
    CommonModule,
    SafetyCertificationRoutingModule
  ]
})
export class SafetyCertificationModule { }
