import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly NOME_STORAGE = 'i18n';
  private readonly LINGUAGEM_DEFAULT = 'pt-BR';

  constructor(private translate: TranslateService) {}

  public configurarLinguagemInicial(): void {
    const language = this.obterLinguagem() || navigator.language;
    this.definirLinguagem(language);
  }

  public obterLinguagem(): string | null {
    return localStorage.getItem(this.NOME_STORAGE);
  }

  public definirLinguagem(newLanguage: string): void {
    const definirLinguagem = (language: any) => {
      this.translate.setDefaultLang(language);
      moment.locale(language);
      localStorage.setItem(this.NOME_STORAGE, language);
    };

    const onSuccess = () => definirLinguagem(newLanguage);
    const onError = () => definirLinguagem(this.LINGUAGEM_DEFAULT);

    this.verificarLinguagemEmAssets(newLanguage).subscribe(onSuccess, onError);
  }

  public obterPais(language: string): string {
    const [, country] = language?.split('-');

    return country || '';
  }

  private verificarLinguagemEmAssets(language: string): Observable<string> {
    return this.translate.use(language);
  }
}
