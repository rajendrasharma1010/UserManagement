import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserNewComponent } from './pages/user-new/user-new.component';
import { RestrictedAreaComponent } from './pages/restricted-area/restricted-area.component';

import { SignupModule } from './pages/signup/signup.module';

import { AppAuthGuardService } from './app-auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomepageComponent,  data: { state: 'home'} },
  { path: 'login', component: LoginComponent,  data: { state: 'login'} },
  { path: 'users', component: UsersComponent, data: { state: 'users'} },
  { path: 'user-new', component: UserNewComponent, data: { state: 'new-user'} },
  { path: 'user-details/:id', component: UserDetailsComponent, data: { state: 'user-details'} },
  { path: 'lazy', loadChildren: './pages/signup/signup.module#SignupModule', data: { state: 'lazy'}  },
  { path: 'restricted', component: RestrictedAreaComponent, canActivate: [AppAuthGuardService], data: { state: 'restricted'}  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
