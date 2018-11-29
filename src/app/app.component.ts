import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiTestApp';
  Data: Object;
  Project: Object
  constructor(private _dataService: DataService) {
    this.getTutorialLists();
    this.getprojects();

  }

  getTutorialLists() {
    this._dataService.getData()
    .subscribe( data => {
      console.log(data);
      this.Data = data;
    });
  }
  getprojects() {
    this._dataService.getProject()
    .subscribe( project => {
      console.log(project);
      this.Project = project;
    });
  }
}
