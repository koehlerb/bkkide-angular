import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Paginated } from '@feathersjs/feathers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<any[]>;

  inputProjectName = "";

  constructor(private data: DataService) {
    // get projects from data service
    this.projects$ = data.projects$().pipe(
        // our data is paginated, so map to .data
        map((p: Paginated<any>) => p.data),
      );
  }

  onSubmit() {
    this.data.createProject( this.inputProjectName );
  }

  ngOnInit() {
  }

}
