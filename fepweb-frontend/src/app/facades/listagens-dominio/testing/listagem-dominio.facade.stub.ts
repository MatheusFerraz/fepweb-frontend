import { criarProvider } from '@fepweb/shared';
import { ListagemDominioFacade } from '../listagem-dominio.facade';
import { Observable, of } from 'rxjs';
import { EstadoCivil, Sexo } from '@fepweb/core/models';

export const listagemDominioFacadeStub = criarProvider(ListagemDominioFacade, {
  getListagemSexosCadastrados(): Observable<Array<Sexo>> {
    return of([]);
  },
  getListagemEstadosCivis(): Observable<Array<EstadoCivil>> {
    return of([]);
  },
});
