import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { URI } from 'src/app/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private router: Router) { }

  loginForm = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  })

  ngOnInit() {
  }

  onSubmit() {
    this.userService.removeToken();
    this.http.post(URI + 'auth/signin', this.loginForm.getRawValue())
      .subscribe((response: any) => {
        this.userService.setToken(response.token);
        this.userService.setLogin(this.loginForm.getRawValue().login || '');
        // console.log('login succesfully', response.token);
        // console.log(this.loginForm.getRawValue());
        this.router.navigate(['/taskboard']);
      })
  }


}
