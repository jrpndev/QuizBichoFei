import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module';
@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    StartRoutingModule,
    CommonModule
  ]
})
export class StartModule { }
