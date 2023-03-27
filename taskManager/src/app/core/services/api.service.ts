import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URI } from 'src/app/environments/environment';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { Task } from 'src/app/models/task.model';
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
  getAllBoards() {
    return this.http.get<Board[]>(`${URI}boards`);
  }
  crateBoard(data: Board) {
    return this.http.post<Board>(`${URI}boards`, data);
  }
  getBoardById(boardId: string) {
    return this.http.get<Board>(`${URI}boards/${boardId}`);
  }
  updateBoardById(boardId: string, data: Board) {
    return this.http.put<Board>(`${URI}boards/${boardId}`, data);
  }
  deleteBoardById(boardId: string) {
    return this.http.delete<Board>(`${URI}boards/${boardId}`);
  }
  getBoardsByIdList(boardsId: string[]) {
    return this.http.get<Board[]>(`${URI}boards/${boardsId}`);
  }
  getBoardsByUserId(userId: string) {
    return this.http.get<Board[]>(`${URI}boards/${userId}`);
  }

  // COLUMNS Section
  getColumnsInBoard(boardId: string) {
    return this.http.get<Column[]>(`${URI}boards/${boardId}/columns`);
  }
  crateColumn(boardId: string, data: Column) {
    return this.http.post<Column>(`${URI}boards/${boardId}/columns`, data);
  }
  getColumnById(boardId: string, columnId: string) {
    return this.http.get<Column>(`${URI}/boards/${boardId}/columns/${columnId}`);
  }
  updateColumnById(boardId: string, columnId: string, data: Column) {
    return this.http.post<Column>(`${URI}/boards/${boardId}/columns/${columnId}`, data);
  }
  deleteColumnById(boardId: string, columnId: string) {
    return this.http.delete<Column>(`${URI}/boards/${boardId}/columns/${columnId}`);
  }
  getColumnsSet() {
    return this.http.get<Column[]>(`${URI}/columnsSet`);
  }
  // getColumnsSet(userdId: string, columnsIdList: string[]) {
  //   const data = userdId || columnsIdList || '';
  //   return this.http.get<Column[]>(`${URI}/columnsSet`, data);
  // }
  updateColumnsSet(data: Column) {
    return this.http.patch<Column[]>(`${URI}/columnsSet`, data);
  }
  createColumnsSet(data: Column) {
    return this.http.post<Column[]>(`${URI}/columnsSet`, data);
  }

  // TASKS section
  getTasksInColumn(boardId: string, columnId: string) {
    return this.http.get<Task[]>(`${URI}/boards/${boardId}/columns/${columnId}/tasks`);
  }
  createTask(boardId: string, columnId: string, data: Task) {
    return this.http.post<Task>(`${URI}/boards/${boardId}/columns/${columnId}/tasks`, data);
  }
  getTaskById(boardId: string, columnId: string, taskId: string) {
    return this.http.get<Task>(`${URI}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
  }
  updateTaskById(boardId: string, columnId: string, taskId: string, data: Task) {
    return this.http.put<Task>(`${URI}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`, data);
  }
  deleteTaskById(boardId: string, columnId: string, taskId: string) {
    return this.http.delete<Task>(`${URI}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
  }
  getTasksSet() {
    return this.http.get<Task[]>(`${URI}/tasksSet`);
  }
  updateTasksSet(data: Task) {
    return this.http.patch<Task[]>(`${URI}/tasksSet`, data);
  }
  getTasksByBoardId(boardId: string) {
    return this.http.get<Task[]>(`${URI}/tasksSet/${boardId}`);
  }
}
