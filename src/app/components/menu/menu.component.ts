import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router : Router ,  private auth : AuthService){}
  redirectToMenu(){
    this.auth.logout();
    this.router.navigate([''])
  }
  redirectToMode(){
    this.router.navigate(['mode'])
  }
  redirectToRanking(){
    this.router.navigate(['ranking'])
  }
}
