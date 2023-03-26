import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { UserService } from 'src/app/core/services/user.service';
import { Board } from 'src/app/models/board.model';
import { Task } from 'src/app/models/task.model';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})

export class TaskboardComponent {
  tasksList: Task[] = [];


  onRemoveTaskItem( id: number) {
    this.tasksList = this.tasksList.filter(item => item.id !== id);
  }

  onAddTask(task: Task) {
    // this.tasksList.push(task);
    this.tasksList = [...this.tasksList, task];
    console.log(this.tasksList);
  }

  // result: User[] = [];
  result = '';
  constructor(private apiService: ApiService, private user: UserService) { }

  ngOnInit() {
    this.apiService.getUsers().
      subscribe((data) => {
        // const login = localStorage.getItem('userame');
        // console.log(data, ' hm', typeof data, 'login ', login);
        // this.result = data;
        this.result = JSON.stringify(data);
      });
  }

}
