import { FeathersService } from './feathers.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private feathers: FeathersService, private router: Router) { }

  public logIn(credentials?): Promise<any> {
    return this.feathers.authenticate(credentials);
  }

  public logOut() {
    this.feathers.logout();
    this.router.navigate(['/']);
  }
}
