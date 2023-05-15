import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score.component';
import { ScoreRoutingModule } from './score-routing.module';



@NgModule({
  declarations: [
    ScoreComponent
  ],
  imports: [
    CommonModule,
    ScoreRoutingModule
  ]
})
export class ScoreModule { }
