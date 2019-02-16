import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FrontComponent } from './front/front.component';
import { ActivateComponent } from './activate/activate.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'activate/:id', component: ActivateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
