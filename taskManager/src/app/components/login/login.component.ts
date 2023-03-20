import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptor/auth.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;
  private uri: string = 'https://task-backend-production-ca65.up.railway.app/';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login: '',
      password: ''
    })
  }

  submit() {
    console.log(this.form.getRawValue());
    // this.http.post(this.uri + 'auth/signin', this.form.getRawValue(), { withCredentials: true })
      this.http.post(this.uri + 'auth/signin', this.form.getRawValue())
      .subscribe((response: any) => {
        AuthInterceptor.accessToken = response.token;

        this.router.navigate(['/taskboard']);
      })
  }


}
