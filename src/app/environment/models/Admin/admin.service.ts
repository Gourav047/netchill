import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../api';

type uploadMoview = {
  name:string,
  category:string,
  yearofrelease:number,
  availabilityStates:string,
  description:string,
  isFeatured:boolean,
  contentPath:string,
  moviePoster:string
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private _http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'accept': '*/*',
      'Content-Type': 'application/json'  // Example header
    })
  };

  uploadMoview(object: uploadMoview) {
    const url = api.Admin.UpdateMovies;
    return this._http.post(url,JSON.stringify(object),this.httpOptions)
  }
}
