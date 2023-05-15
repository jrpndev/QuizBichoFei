import { NgModule } from '@angular/core';
import { CommonModule, FormatWidth } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    LoginPageRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class LoginPageModule { }
