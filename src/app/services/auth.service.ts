import { Injectable } from '@angular/core';
import { User } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private isUserId: any;

  login(email: string, password: string, users: User[]): any {
    let aproved;
    const user = users.find((element) => element.email == email && element.password == password)
    if (email == 'liliene@gmail.com' && password == '123') {
      this.isAuthenticated = true;
      return 0;
    } else if (user != null) {
      this.isAuthenticated = true;
      this.isUserId = user.id;
    } else {
      return -1;
    }
  }

  getId(){
    return this.isUserId;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticate(): boolean {
    return this.isAuthenticated;
  }
}
