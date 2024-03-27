import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from '../assets/i18n/pt-BR.json';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService) {
    this.translateService.setTranslation('pt-BR', defaultLanguage);
    translateService.setDefaultLang('pt-BR');
  }

  ngOnInit(): void {}
}
