import { Component, OnInit } from '@angular/core';
import { FeathersService } from '../feathers.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private feathers: FeathersService) { }

  ngOnInit() {
  }

  submitted = false;
  email = "";
  password1 = "";
  password2 = "";
  captcha = "";
  messages: string[] = [];

  onSubmit() {
    this.submitted = true;
    //this.data.createUpdate( this.email, this.captcha );
    const email = this.email;
    const password = this.password1;
    const captcha = this.captcha;
    this.feathers.service('api/signups')
      .create({email, password, captcha})
      .then(() => this.messages.push('User created.'))
      .catch(err => {
        this.messages.push('Could not create user: ' + err.message );
      });
  }

}
