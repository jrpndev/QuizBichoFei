import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../models/question.model';
import { RouterTestingHarness } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Questions: Question[] = [];

  indexOfQuestions: Question[] = [];

  Question: Question = {
    id: 0,
    subject: '',
    options: [
      { value: '', selected: false, correct: false },
      { value: '', selected: false, correct: false },
      { value: '', selected: false, correct: false },
      { value: '', selected: false, correct: false }
    ],
    isMarked: false,
    img: '',
    area: ''
  }

  baseUrl = "http://localhost:3001/questions"

  key: number = 0;

  update = false;
  create = false;
  del = false;
  search = false;

  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    this.getQuestions();
  }
  menuHandle(res: string) {

    this.create = false;
    this.update = false;
    this.del = false;
    this.search = false;

    if (res === 'create') {
      this.create = true; this.update = false; this.del = false; this.search = false;
    } else if (res === 'update') {
      this.create = false; this.update = true; this.del = false; this.search = false;
    } else if (res === 'del') {
      this.create = false; this.update = false; this.del = true; this.search = false;
    } else if (res === 'search') {
      this.create = false; this.update = false; this.del = false; this.search = true;
    }
  }
  getQuestions() {
    this.http.get<Question[]>(this.baseUrl).subscribe(data => {
      this.Questions = data;
      this.indexOfQuestions = data;
    })
  }
  filterQuestions() {
    if (this.key) {
      this.indexOfQuestions = this.Questions.filter((a) => a.id == this.key);
    } else {
      this.indexOfQuestions = this.Questions;
    }
  }
  postOfQuestions() {
    this.http.post<Question>(this.baseUrl, this.Question).subscribe(err => {
      console.log(err)
      this.snackBar.open('Ação concluída com sucesso!', 'Fechar', {
        duration: 3000, // Define a duração do Snackbar em milissegundos
        horizontalPosition: 'center', // Define a posição horizontal do Snackbar ('start', 'center' ou 'end')
        verticalPosition: 'top', // Define a posição vertical do Snackbar ('top' ou 'bottom')
        panelClass: 'success-snackbar' // Define uma classe CSS personalizada para estilizar o Snackbar de sucesso
      });
    })
  }
  confirmDialog(id: number) {
    const url = this.baseUrl + "/" + id;
    const response = confirm("Deseja apagar a questão?");
    if (response) {
      this.http.delete(url).subscribe(err => {
        console.log(err);
      })
      this.getQuestions();
    }
  }
  editQuestion(id:number){
    return this.router.navigate([`questionupdate/${id}`]);
  }
}
