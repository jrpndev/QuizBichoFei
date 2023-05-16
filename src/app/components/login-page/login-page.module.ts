import { NgModule } from '@angular/core';
import { CommonModule, FormatWidth } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    LoginPageRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ]
})
export class LoginPageModule { }
