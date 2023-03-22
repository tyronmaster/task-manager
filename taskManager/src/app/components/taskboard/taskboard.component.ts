import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  // result: User[] = [];
  result = '';
  constructor(private apiService: ApiService) { }

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
