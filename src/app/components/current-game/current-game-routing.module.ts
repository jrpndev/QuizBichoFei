import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentGameComponent } from './current-game.component';

const routes: Routes = [{
  path : '', component : CurrentGameComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentGameRoutingModule{ }
