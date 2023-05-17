import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';
import {RankingRoutingModule} from './ranking-routing.module'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RankingComponent
  ],
  imports: [
    CommonModule,
    RankingRoutingModule,
    HttpClientModule
  ]
})
export class RankingModule { }
