import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang(this.defaultLanguage);
  }

  defaultLanguage = 'en';
  visibility: boolean = true;
  logged: boolean = false;

  ngOnInit(){
    this.logged = localStorage.getItem('username') ? true : false;
  }

  ngOnChanges() {
    this.logged = localStorage.getItem('username') ? true : false;
  }

  onChangeLanguage() {
    this.defaultLanguage = this.defaultLanguage === 'en' ? 'pl' : 'en';
    this.translate.use(this.defaultLanguage);
    this.visibility = !this.visibility;
    console.log('change', this.defaultLanguage);
  }
}
