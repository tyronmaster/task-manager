import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form!: FormGroup;
  private uri: string = 'https://task-backend-production-ca65.up.railway.app/';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      login: '',
      password: ''
    })
  }

  submit() {
    console.log(this.form.getRawValue());
    this.http.post(this.uri + 'auth/signup', this.form.getRawValue())
    .subscribe(() => {
      this.router.navigate(['/login']);
    })
  }

}
