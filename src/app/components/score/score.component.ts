import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent{
  
  constructor(private router : ActivatedRoute){}
  score : any  = this.router.snapshot.paramMap.get('points');
}
