import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URI } from 'src/app/environments/environment';
import { Board } from 'src/app/models/board.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // USERS section
  getUsers() {
    return this.http.get<User[]>(URI + 'users');
  }
  getUserById(id: string) {
    return this.http.get<User>(`${URI}users/${id}`);
  }
  updateUser(id: string, data: User) {
    return this.http.put<User>(`${URI}users/${id}`, data);
  }
  deleteUser(id: string) {
    return this.http.delete<User>(`${URI}users/${id}`);
  }

  // BOARDS section
  getAllBoards(){
    return this.http.get<Board[]>(`${URI}boards`);
  }
  crateBoard(data: Board){
    return this.http.post<Board>(`${URI}boards`,data);
  }
  getBoardById(boardId: string) {
    return this.http.get<Board>(`${URI}boards/${boardId}`);
  }

}
