import { TranslateService } from '@ngx-translate/core';
import { criarProvider } from './criar-provider';
import { Observable, of } from 'rxjs';

export const translateServiceStub = criarProvider(TranslateService, {
  get<T>(key: T): Observable<T> {
    return of(key);
  },
  instant<T>(key: T): string | any {
    return key;
  },
  setDefaultLang<T>(key: string): void {},
  use<T>(key: T): Observable<T> {
    return of(key);
  },
  addLangs(langs: string[]) {
    return [];
  },
  getLangs() {
    return ['en-us'];
  },
  getBrowserLang() {
    return '';
  },
  getBrowserCultureLang() {
    return '';
  },
  setTranslation(language: string, module: any): void {},
});
