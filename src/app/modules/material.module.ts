import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core'
const modules: any = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatDatepickerModule,
  MatCardModule,
  CommonModule
]

@NgModule({
  
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],

  providers: [
    provideNativeDateAdapter()
  ]
})
export class MaterialModule { }
