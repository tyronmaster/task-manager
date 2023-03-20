import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  message: string = '';
  messages: string[] = [];
  private uri: string = 'https://task-backend-production-ca65.up.railway.app/';


  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get(this.uri + 'users', { withCredentials: true })
    this.http.get(this.uri + 'users')
    .subscribe((res: any) => {
      this.message = JSON.stringify(res);
      this.messages = this.message.split(',');
    })
  }

}
