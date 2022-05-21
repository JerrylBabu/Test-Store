import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { UsersTableComponent } from './Pages/users-table/users-table.component';

const routes: Routes = [
  // { path: 'login-page', component: LoginPageComponent},
  // { path: 'user-table', component: UsersTableComponent  },
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent},
  { path: 'user-table', component: UsersTableComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
