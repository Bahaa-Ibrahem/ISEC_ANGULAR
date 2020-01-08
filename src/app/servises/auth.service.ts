import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse, HttpHandler } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper =new JwtHelperService();

  constructor(private http: HttpClient) { }

  singup(credentials) {
    let token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'x-auth-token': token
      })
    };

    return this.http.post('http://localhost:3000/api/users',credentials, httpOptions)
    .pipe(
      map(response => response)
    );
  }

  login(credentials) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Authorization': 'my-auth-token'
      })
    };
    
    return this.http.post('http://localhost:3000/api/auth',credentials, httpOptions)
      .pipe(
        map(response => {
          let result = response;
          if ( result) {
            localStorage.setItem('token', JSON.stringify(result));
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    localStorage.removeItem('token'); 
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if(!token) return null;
    return this.jwtHelper.decodeToken(token);
  }

  user() {
    let token = localStorage.getItem('token');  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*', 
        'x-auth-token': token
      })
    };
    return this.http.get('http://localhost:3000/api/users/me', httpOptions)
      .pipe(map(res => {       
        return res['name'];
      }))
  }

};