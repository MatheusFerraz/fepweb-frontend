import { Injectable } from '@angular/core';
import { Participante, ParticipanteResponse } from '@fepweb/core/models';
import { ParticipanteResource } from '@fepweb/core/resources';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParticipanteFacade {
  constructor(private participanteResource: ParticipanteResource) {}

  salvarDadosParticipante(
    participante: Participante
  ): Observable<Participante> {
    return this.participanteResource.salvarDadosParticipante(participante);
  }

  getParticipantePeloCodigoIdentificador(
    codigoIdentificador: number
  ): Observable<Participante> {
    return this.participanteResource.getParticipantePeloCodigoIdentificador(
      codigoIdentificador
    );
  }

  getListaGeralParticipantes(): Observable<Array<ParticipanteResponse>> {
    return this.participanteResource.getListaGeralParticipantes();
  }

  excluirParticipante(codigoIdentificador: number): Observable<string> {
    return this.participanteResource.excluirParticipante(codigoIdentificador);
  }
}
