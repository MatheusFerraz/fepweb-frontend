import { criarProvider } from '@fepweb/shared';
import { ListagemDominioResource } from '../listagem-dominio.resource';
import { Observable, of } from 'rxjs';
import { EstadoCivil, Sexo } from '@fepweb/core/models';

export const ListagemDominioResourceStub = criarProvider(
  ListagemDominioResource,
  {
    getListagemSexosCadastrados(): Observable<Array<Sexo>> {
      return of([]);
    },
    getListagemEstadosCivis(): Observable<Array<EstadoCivil>> {
      return of([]);
    },
  }
);
