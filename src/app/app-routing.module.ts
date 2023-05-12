import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
   {path: 'quiz', loadChildren : () => import('./components/current-game/current-game.module').then(m => m.CurrentGameModule)},
   {path: 'start', loadChildren : () => import('./components/start/start.module').then(m => m.StartModule)},
   {path:'', loadChildren:()=>import('./components/login-page/login-page.module').then(m=>m.LoginPageModule)},
   {path:'dashboard',loadChildren:()=>import('./components/dashboard/dashboard.module').then(m=>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
