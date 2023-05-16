import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent {
  constructor(private router : Router){

  }

  redirectToQuiz(){
    this.router.navigate(['quiz'])
  }
}
