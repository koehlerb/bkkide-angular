import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeathersService } from '../feathers.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  messages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private feathers: FeathersService
  ) { }

  ngOnInit() {
    const activationKey = this.route.snapshot.paramMap.get('id');
    this.feathers.service('api/signups')
      .remove( null, {
        query: {
          activationKey
        }
      })
      .then(() => this.messages.push('User activated.'))
      .catch(err => {
        this.messages.push('Could not activate user: ' + err.message );
      });
  }

}
