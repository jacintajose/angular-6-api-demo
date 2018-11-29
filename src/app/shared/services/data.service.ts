import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  $baseUrl = 'https://buildfromzero.com';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.$baseUrl + '/tutorials/api/?format=json', this.Options());
  }


  getTutorial(slug:String) {
    const url = this.$baseUrl +"/tutorials/api/" + slug + "/?format=json"
    console.log(url)
    return this.http.get(url, this.Options());
  }
getProject()
{
  return this.http.get(this.$baseUrl + '/projects/api/?format=json', this.Options());

}
  // httpOptions
  Options() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
              'Content-Type' : 'application/json'
      })
    };
    return httpOptions;
  }

}
