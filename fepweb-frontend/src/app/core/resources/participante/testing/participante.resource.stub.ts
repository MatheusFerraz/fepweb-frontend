import { criarProvider } from '@fepweb/shared';
import { ParticipanteResource } from '../participante.resource';
import { Participante, ParticipanteResponse } from '@fepweb/core/models';
import { Observable, of } from 'rxjs';

export const participanteResourceStub = criarProvider(ParticipanteResource, {
  salvarDadosParticipante(
    participante: Participante
  ): Observable<Participante> {
    return of();
  },
  getParticipantePeloCodigoIdentificador(
    codigoIdentificador: number
  ): Observable<Participante> {
    return of();
  },
  getListaGeralParticipantes(): Observable<Array<ParticipanteResponse>> {
    return of([]);
  },
  excluirParticipante(codigoIdentificador: number): Observable<string> {
    return of('');
  },
});
