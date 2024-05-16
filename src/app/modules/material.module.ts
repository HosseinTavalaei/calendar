import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatGridListModule} from '@angular/material/grid-list'
const modules: any = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule
]

@NgModule({
  
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
