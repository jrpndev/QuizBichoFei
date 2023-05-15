import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
   {path: 'quiz', loadChildren : () => import('./components/current-game/current-game.module').then(m => m.CurrentGameModule)},
   {path: 'start', loadChildren : () => import('./components/start/start.module').then(m => m.StartModule)},
   {path:'', loadChildren:()=>import('./components/login-page/login-page.module').then(m=>m.LoginPageModule)},
   {path:'dashboard',loadChildren:()=>import('./components/dashboard/dashboard.module').then(m=>m.DashboardModule)},
   {path:'questionupdate/:id', loadChildren:()=>import('./components/question-update/question-update.module').then(m=>m.QuestionUpdateModule)},
   {path:'score/:points', loadChildren:()=>import('./components/score/score.module').then(m=>m.ScoreModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
