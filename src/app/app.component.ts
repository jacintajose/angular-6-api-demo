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

  constructor(private _dataService: DataService) {
    this.getTutorialLists();
  }

  getTutorialLists() {
    this._dataService.getData()
    .subscribe( data => {
      console.log(data);
      this.Data = data;
    });
  }

}
