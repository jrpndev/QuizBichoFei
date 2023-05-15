import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private router : Router){}

  email : string = ''
  password : string = ''

  login() {
    if(this.email == 'liliene@gmail.com' && this.password == '123') this.router.navigate(['dashboard']);
    else this.router.navigate(['quiz'])
  }
}
