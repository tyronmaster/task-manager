import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  setLogin(username: string){
    localStorage.setItem('username', username);
  }

  getLogin(){
    return localStorage.getItem('username');
  }

  removeLogin(){
    localStorage.removeItem('username');
  }
}
