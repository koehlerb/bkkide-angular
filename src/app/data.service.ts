import { Injectable } from '@angular/core';
import { FeathersService } from './feathers.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private feathers: FeathersService) { }

  projects$() {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return (this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
      .service('api/projects'))
      .watch()
      .find();
  }

  createProject(title: string) {
    if (title === '') {
      return;
    }

    // feathers-reactive Observables are hot by default,
    // so we don't need to subscribe to make create() happen.
    this.feathers
      .service('api/projects')
      .create({
        title
      });
  }
}
