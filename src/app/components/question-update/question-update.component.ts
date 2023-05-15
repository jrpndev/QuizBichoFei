import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-question-update',
  templateUrl: './question-update.component.html',
  styleUrls: ['./question-update.component.css']
})
export class QuestionUpdateComponent implements OnInit {


  baseUrl = "http://localhost:3001/questions"

  dataLoaded = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDataById();
  }
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
  getDataById() {
    const id = this.route.snapshot.paramMap.get('id');
    const url = this.baseUrl + "/" + id;

    this.http.get<Question>(url).subscribe(data => {
      this.Question = data;
      this.dataLoaded = true; // marca os dados como carregados
    });
  }
  updateQuestion() {
    const id = this.route.snapshot.paramMap.get('id');
    const url = this.baseUrl + "/" + id
    this.http.put(url, this.Question).subscribe(err => {
      console.log(err);
      this.snackBar.open('Questão atualizada com sucesso!', 'Fechar', {
        duration: 3000, // Define a duração do Snackbar em milissegundos
        horizontalPosition: 'center', // Define a posição horizontal do Snackbar ('start', 'center' ou 'end')
        verticalPosition: 'top', // Define a posição vertical do Snackbar ('top' ou 'bottom')
        panelClass: 'success-snackbar' // Define uma classe CSS personalizada para estilizar o Snackbar de sucesso
      });
      this.router.navigate(['dashboard']);
    })
  }
}
