import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  baseUrl = "http://localhost:3001/users";

  constructor(
    private http: HttpClient,
  ) { }
  ngOnInit(): void {
    this.getUsers();
  }

  users: User[] = [];

  getUsers() {
    this.http.get<User[]>(this.baseUrl).subscribe(response => {
      this.users = response;
      this.users.sort((a, b) => {
        if (a.recorde > b.recorde) {
          return -1; // "a" vem antes de "b"
        } else if (a.recorde < b.recorde) {
          return 1; // "a" vem depois de "b"
        } else {
          return 0; // ordem não alterada
        }
      });

    })
  }
}
