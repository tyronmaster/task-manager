import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  newForm!: FormComponent;
signIn(value: string){
  console.log(value);
  this.newForm = new FormComponent();
}
}
