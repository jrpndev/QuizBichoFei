import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/authguard.service';

const routes: Routes = [
  { path: 'quiz', canActivate: [AuthGuard], loadChildren: () => import('./components/current-game/current-game.module').then(m => m.CurrentGameModule) },
  { path: 'start', canActivate: [AuthGuard], loadChildren: () => import('./components/start/start.module').then(m => m.StartModule) },
  { path: '', loadChildren: () => import('./components/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'questionupdate/:id', canActivate: [AuthGuard], loadChildren: () => import('./components/question-update/question-update.module').then(m => m.QuestionUpdateModule) },
  { path: 'score/:points', canActivate: [AuthGuard], loadChildren: () => import('./components/score/score.module').then(m => m.ScoreModule) },
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'menu', canActivate: [AuthGuard], loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule) },
  { path: 'mode', canActivate: [AuthGuard], loadChildren: () => import('./components/mode/mode.module').then(m => m.ModeModule) },
  { path: 'ranking', canActivate: [AuthGuard], loadChildren: () => import('./components/ranking/ranking.module').then(m => m.RankingModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard] // Adicione o AuthGuard aqui
})
export class AppRoutingModule { }
