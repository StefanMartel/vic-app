import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'vic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;

  constructor(translate: TranslateService) {
    this.title = 'TITRE EX';

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('debug');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

}
