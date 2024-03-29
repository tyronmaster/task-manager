import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isLogged$ = this.state.isLogged$.asObservable();

  constructor(private router: Router, private state: StateService) { }
  // @Input() logged: boolean;

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    const logged = this.state.isLogged$.getValue();
    this.state.isLogged$.next(!logged);
    console.log(logged);
    // this.logged = !this.logged;
    this.router.navigate(['/']);
  }

}
