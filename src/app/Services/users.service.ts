import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user = {};
  constructor(
    private http: HttpClient
  ) { }
  getUsers(){
    return this.http.get('https://randomuser.me/api/?results=50&seed=hu')
  }
}
