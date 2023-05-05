import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentGameComponent } from './current-game.component';
import { FormsModule } from '@angular/forms';
import { CurrentGameRoutingModule } from './current-game-routing.module';


@NgModule({
  declarations: [
    CurrentGameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrentGameRoutingModule
  ],
  exports :[
    CurrentGameComponent
  ]
})
export class CurrentGameModule { }
