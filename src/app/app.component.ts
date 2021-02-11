import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results : Object;
  obs : Observable<Object>;

  constructor(private http : HttpClient)
  {
   
  }

  onClick()
  {
    this.obs = this.http.get("https://lambda-88.netlify.app/.netlify/functions/api/users");
    this.obs.subscribe(this.getData);
  }
  getData = (data) =>{
    console.log(typeof data)
    this.results = data;
  }
}
