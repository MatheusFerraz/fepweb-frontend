import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Participante } from '../../models/participante/participante.model';
import { Observable } from 'rxjs';
import { ParticipanteResponse } from '../../models/participante/participante-response.model';

@Injectable({
  providedIn: 'root',
})
export class ParticipanteResource {
  private baseUrl = environment.api;

  constructor(private httpClientt: HttpClient) {}

  salvarDadosParticipante(
    participante: Participante
  ): Observable<Participante> {
    return this.httpClientt.post<Participante>(
      `${this.baseUrl}/participantes`,
      participante
    );
  }

  getParticipantePeloCodigoIdentificador(
    codigoIdentificador: number
  ): Observable<Participante> {
    let params = new HttpParams();
    params = params.append('codigoIdentificador', codigoIdentificador);

    return this.httpClientt.get<Participante>(`${this.baseUrl}/participantes`, {
      params: params,
    });
  }

  getListaGeralParticipantes(): Observable<Array<ParticipanteResponse>> {
    return this.httpClientt.get<Array<ParticipanteResponse>>(
      `${this.baseUrl}/participantes/listagem`
    );
  }

  excluirParticipante(codigoIdentificador: number): Observable<string> {
    return this.httpClientt.delete<string>(
      `${this.baseUrl}/participantes/${codigoIdentificador}`
    );
  }
}
