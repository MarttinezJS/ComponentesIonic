import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../models/Component';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseURL + 'users');
  }

  getComents() {
    return this.http.get(this.baseURL + 'comments')
    .pipe(
      delay(1500)
    );
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/menu.json');
  }

  getHeroes() {
    return this.http.get<Componente[]>('/assets/superheroes.json');
  }
}
