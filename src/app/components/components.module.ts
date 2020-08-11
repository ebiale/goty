import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NavbarComponent} from './navbar/navbar.component';
import {HorGraphBarComponent} from './hor-graph-bar/hor-graph-bar.component';


@NgModule({
  declarations: [
    HorGraphBarComponent,
    NavbarComponent
  ],
  exports: [
    HorGraphBarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule {
}
