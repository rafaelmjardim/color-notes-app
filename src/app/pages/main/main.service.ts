import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }


  getApiData = () => {
    return this.http.get(`${API_KEY}`);
  }


}
