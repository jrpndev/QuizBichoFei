import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {RegisterRoutingModule} from './register-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    CommonModule,
    HttpClientModule,
    MatSnackBarModule
  ]
})
export class RegisterModule { }
