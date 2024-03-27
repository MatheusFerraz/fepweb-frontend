import { I18nService } from '../i18n.service';
import { criarProvider } from '@fepweb/shared';

export const i18nServiceStub = criarProvider(I18nService, {
  configurarLinguagemInicial(): void {},
  obterLinguagem(): string | null {
    return null;
  },
  definirLinguagem(newLanguage: string): void {},
  obterPais(language: string): string {
    return '';
  },
});
