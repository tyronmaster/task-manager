import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  result = '';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().
    subscribe((data) => {
      console.log(JSON.stringify(data));
      this.result = JSON.stringify(data)
    });
  }

}
