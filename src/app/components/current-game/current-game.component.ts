import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Question } from '../models/question.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {
  showFinishButton: boolean = false;
  finish: boolean = false;
  baseUrl = "http://localhost:3001/questions";
  userUrl = "http://localhost:3001/users"
  currentIndex: number = 0;
  pageSize: number = 1;
  Questions: Question[] = [];
  slicedQuestions: Question[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.getQuestionsFromDatabase();
  }

  updateSelection(question: Question, selectedOption: string) {
    question.options.forEach(option => {
      option.selected = (option.value === selectedOption);
    });
  }


  selectedOption(options: any) {
    return options.find((option: any) => option.selected);
  }

  updatePaginator() {
    const startIndex = this.currentIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.slicedQuestions = this.Questions.slice(startIndex, endIndex);
    this.finish = endIndex >= this.Questions.length;
    this.showFinishButton = this.finish && !this.isFirstQuestion();

  }

  isFirstQuestion() {
    return this.currentIndex === 0;
  }

  getQuestionsFromDatabase() {
    this.http.get<Question[]>(this.baseUrl).subscribe(res => {
      this.Questions = res;
      this.updatePaginator();
    })
  }

  next() {
    if (this.currentIndex < this.Questions.length / this.pageSize - 1) {
      this.currentIndex++;
      this.updatePaginator();
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updatePaginator();
    }
  }

  score() {
    let recorde = 0;
    this.Questions.forEach(question => {
      const selectedOption = this.selectedOption(question.options);
      if (selectedOption && selectedOption.correct) {
        recorde++;
      }
      question.isMarked = true;
    });
    this.router.navigate([`score/${recorde}`]);
    const url = `${this.userUrl}/${this.auth.getId()}`;
    this.http.patch(url, { recorde }).subscribe(
      response => {
        // Lógica após a atualização do campo "score"
      },
      error => {
        // Tratamento de erro
      }
    );
  }

}
