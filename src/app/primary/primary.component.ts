import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  title = "codepool.ca";

  loggedIn = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loggedIn = false;
    this.auth
      .logIn()
      .then(() => {
        this.loggedIn = true;
      });
  }

  logOut() {
    this.auth.logOut();
  }
}
