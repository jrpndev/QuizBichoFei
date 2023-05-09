import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentGameComponent } from './current-game.component';
import { FormsModule } from '@angular/forms';
import { CurrentGameRoutingModule } from './current-game-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CurrentGameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrentGameRoutingModule,
    HttpClientModule
  ],
  exports :[
    CurrentGameComponent
  ]
})
export class CurrentGameModule { }
