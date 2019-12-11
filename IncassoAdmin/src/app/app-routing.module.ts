import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../app/auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AdministrationsComponent } from './administrations/administrations.component';
import { DebtorsComponent } from './debtors/debtors.component';
import { ActionsComponent } from './actions/actions.component';
const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "dashboard", component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users", component: UsersComponent
  },
  {
    path: "administrations", component: AdministrationsComponent
  },
  {
    path: "debtors", component: DebtorsComponent
  },
  {
    path: "actions", component: ActionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
