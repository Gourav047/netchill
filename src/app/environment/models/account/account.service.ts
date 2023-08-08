import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { api } from '../api';

type signup = {
  fullName: string,
  email: string,
  password: string,
  passwordConfirm: string
}

type login = {
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'accept':'*/*',
      'Content-Type': 'application/json'  // Example header
    })
  };
  
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  set(val:boolean){
    this.isAuthenticatedSubject.next(val);
  }

  signUp(object: signup):Observable<any> {
    const url = api.Account.Signup;
    return this._http.post(url,JSON.stringify(object),this.httpOptions);
  }

  login(object:login):Observable<any>{
    const url=api.Account.Login;
    return this._http.post(url,JSON.stringify(object),this.httpOptions);
  }

  authenticationService(){

  }

}
