import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  users: User[] = [];

  baseUrl = "http://localhost:3001/users"

  userForm !: FormGroup;

  user: User = {
    name: '',
    recorde: 0,
    date: '',
    email: '',
    password: '', 
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUsers();
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  getUsers() {
    this.http.get<User[]>(this.baseUrl).subscribe(response => {
      this.users = response;
    })
  }
  onSubmit(): void {
    if (this.userForm.valid) {
      let valid = true;
      this.users.forEach((a) => {
        if (a.email === this.user.email) {
          valid = false;
          this.snackBar.open('Usuário já cadastrado', 'Fechar', {
            duration: 3000, // Define a duração do Snackbar em milissegundos
            horizontalPosition: 'center', // Define a posição horizontal do Snackbar ('start', 'center' ou 'end')
            verticalPosition: 'top', // Define a posição vertical do Snackbar ('top' ou 'bottom')
            panelClass: 'success-snackbar' // Define uma classe CSS personalizada para estilizar o Snackbar de sucesso
          });
        }
      });
      if (valid) {
        this.http.post<User>(this.baseUrl, this.user).subscribe((res) => {
          console.log(res);
          this.snackBar.open('Cadastro realizado com sucesso', 'Fechar', {
            duration: 3000, // Define a duração do Snackbar em milissegundos
            horizontalPosition: 'center', // Define a posição horizontal do Snackbar ('start', 'center' ou 'end')
            verticalPosition: 'top', // Define a posição vertical do Snackbar ('top' ou 'bottom')
            panelClass: 'success-snackbar' // Define uma classe CSS personalizada para estilizar o Snackbar de sucesso
          });
          this.router.navigate([''])
        });
      }
    }
  }
}
