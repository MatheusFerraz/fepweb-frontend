import { Injectable } from '@angular/core';
import { EstadoCivil, Sexo } from '@fepweb/core/models';
import { ListagemDominioResource } from '@fepweb/core/resources';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListagemDominioFacade {
  constructor(private listagemDominioResource: ListagemDominioResource) {}

  getListagemSexosCadastrados(): Observable<Array<Sexo>> {
    return this.listagemDominioResource.getListagemSexosCadastrados();
  }

  getListagemEstadosCivis(): Observable<Array<EstadoCivil>> {
    return this.listagemDominioResource.getListagemEstadosCivis();
  }
}
