import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { Sexo } from '../../models/listagens-dominio/sexo.model';
import { EstadoCivil } from '../../models/listagens-dominio/estado-civil.model';

@Injectable({
  providedIn: 'root',
})
export class ListagemDominioResource {
  private baseUrl = environment.api;

  constructor(private httpClientt: HttpClient) {}

  getListagemSexosCadastrados(): Observable<Array<Sexo>> {
    return this.httpClientt.get<Array<Sexo>>(`${this.baseUrl}/listagens/sexos`);
  }

  getListagemEstadosCivis(): Observable<Array<EstadoCivil>> {
    return this.httpClientt.get<Array<EstadoCivil>>(
      `${this.baseUrl}/listagens/estados-civis`
    );
  }
}
