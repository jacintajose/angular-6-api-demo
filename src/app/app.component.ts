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
  TutorialDetail:Object


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

  onClick(slug:String){
    console.log("click event")
    console.log(slug)
    this.getTutorial(slug)
  }


  getTutorial(slug:String) {
    this._dataService.getTutorial(slug)
    .subscribe( data => {
      console.log("Tutorial detail response")
      console.log(data);
      this.TutorialDetail = data;
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
