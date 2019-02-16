import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeathersService } from '../feathers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  messages: string[] = [];

  constructor(
    private feathers: FeathersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.email;
    const password = this.password;

    // try to authenticate with feathers
    this.feathers.authenticate({
      strategy: 'local',
      email,
      password
    })
      // navigate to base URL on success
      .then(() => {
        this.router.navigate(['/projects']);
      })
      .catch(err => {
        this.messages.unshift('Wrong credentials: ' + err);
      });
  }

}
