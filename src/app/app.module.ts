import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
// if you need forms support:
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppComponent } from './app.component';
import { FeathersService } from './feathers.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FrontComponent } from './front/front.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { PrimaryComponent } from './primary/primary.component';
import { PasswordmatchDirective } from './passwordmatch.directive';
import { ActivateComponent } from './activate/activate.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FrontComponent,
    FooterComponent,
    PrimaryComponent,
    PasswordmatchDirective,
    ActivateComponent,
    ProjectsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule.forRoot(), // Keep in mind the "forRoot"-magic nuances!
    RecaptchaFormsModule // if you need forms support
  ],
  providers: [
    FeathersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
