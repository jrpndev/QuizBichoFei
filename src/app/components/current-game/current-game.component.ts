import { Component, OnInit } from '@angular/core';

import { Question } from '../models/question.model';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {

  baseUrl = "http://localhost:3001/questions"

  before: number = 0;

  next: number = 5;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

    this.getQuestionsFromDatabase();

  }

  updateSelection(options: any, selectedOption: any) {
    for (let option of options) {
      if (option.label !== selectedOption.label) {
        option.selected = false;
      }
    }
  }

  selectedOption(options: any) {
    for (let option of options) {
      if (option.selected) {
        return option;
      }
    }
    return null;
  }

  Score: number = 0;

  Questions: Question[] = [];

  slicedQuestions: Question[] = [];

  Next() {
    if (this.next == this.Questions.length) {
      console.log("Erro");
    } else {
      this.next += 5;
      this.before = this.before + 5;
    }
  }
  Before() {
    if (this.before == 0) {
      console.log("Erro");
    } else {
      this.next = this.next - 5;
      this.before = this.before - 5;
    }
  }
  updatePaginator() {
    this.slicedQuestions = this.Questions.slice(this.before, this.next);
  }
  getQuestionsFromDatabase() {
    this.http.get<Question[]>(this.baseUrl).subscribe(res => {
      this.Questions = res;
      this.slicedQuestions = this.Questions.slice(0, 5);
    })
  }

  answerQuestion(option: string, id: number) {
    this.Questions.map(a => {
      if (a.id == id) {
        if (a.solve == option) {
          a.isMarked = true
        }
        else {
          a.isMarked = false
        }
      }
    })
  }

  score() {
    this.Questions.map(a => a.options.map(b => {
      if (b.correct && b.selected) this.Score++;
    }))
    console.log(this.Score);
  }
}
