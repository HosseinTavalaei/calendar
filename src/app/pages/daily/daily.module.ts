import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyRoutingModule } from './daily-routing.module';
import { DailyComponent } from './daily.component';


@NgModule({
  declarations: [
    DailyComponent
  ],
  imports: [
    CommonModule,
    DailyRoutingModule
  ]
})
export class DailyModule { }
