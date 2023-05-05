import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
   {path: 'quiz', loadChildren : () => import('./components/current-game/current-game.module').then(m => m.CurrentGameModule)},
   {path: '', loadChildren : () => import('./components/start/start.module').then(m => m.StartModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
