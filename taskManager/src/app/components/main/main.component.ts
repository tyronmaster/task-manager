import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { URI } from 'src/app/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }

  onClick() {
    this.userService.removeToken();
    this.http.post(URI + 'auth/signin', { login: 'test', password: 'test' })
      .subscribe((response: any) => {
        this.userService.setToken(response.token);
        this.userService.setLogin('test');
        this.router.navigate(['/taskboard']);
      })
  }

}
