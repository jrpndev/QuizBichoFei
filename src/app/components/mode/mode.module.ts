import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeComponent } from './mode.component';
import {ModeRoutingModule} from './mode-routing.module'


@NgModule({
  declarations: [
    ModeComponent
  ],
  imports: [
    CommonModule,
    ModeRoutingModule
  ]
})
export class ModeModule { }
