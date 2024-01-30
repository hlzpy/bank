import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CdkScrollable } from "@angular/cdk/overlay";
import { HomeComponent } from "./home.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { IconsProviderModule } from "../icons-provider.module";
import { MODULE_DEFINITIONS } from "./module-definitions";

@NgModule({
  declarations: [HomeComponent, TopbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    CdkScrollable,
    IconsProviderModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [...MODULE_DEFINITIONS],
      },
    ]),
  ],
})
export class HomeModule {}
