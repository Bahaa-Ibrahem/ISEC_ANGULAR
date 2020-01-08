import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  token = localStorage.getItem('token');  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*', 
      'x-auth-token': this.token
    })
  };

  getweather(data) {
    let name = data.name;
    return this.http.get(`http://localhost:3000/api/weathers/${name}`, this.httpOptions);
  }


}
