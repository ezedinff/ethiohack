import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginShellComponent} from './user/containers/login-shell/login-shell.component';
const routes: Routes = [
  {
    path: '', component: LoginShellComponent
  },
  {
    path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
