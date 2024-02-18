import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private API_KEY = 'https://pokeapi.co/api/v2/pokemon/ditto';

  constructor(private http: HttpClient) { }


  getApiData = () => {
    return this.http.get(`${this.API_KEY}`);
  }


}
