import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashborad-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
