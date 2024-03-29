import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashborad-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
  ]
})
export class DashboardModule { }
