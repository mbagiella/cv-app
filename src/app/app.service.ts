import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './model/Person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

	person:Observable<Person>;

  	constructor(private http: HttpClient) { }


  public getPerson():Observable<Person>{
  	return this.http.get<Person>("assets/data.json");
  }


}
