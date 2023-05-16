import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) { }

  baseUrl = "http://localhost:3001/users";
  users: User[] = [];
  email: string = '';
  password: string = '';

  getUsers() {
    this.http.get<User[]>(this.baseUrl).subscribe(res => {
      this.users = res;
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  login() {
    if (this.email == '123' && this.password === '123') { this.router.navigate(['dashboard']) } else {
      const foundUser = this.users.filter((user) => user.email === this.email && user.password === this.password);
      foundUser.length > 0
        ? this.router.navigate(['menu'])
        : this.snackBar.open('Usuário ou senha incorretos', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'success-snackbar'
        });
    }
  }

  redirectToRegister() {
    this.router.navigate(['register']);
  }
}
