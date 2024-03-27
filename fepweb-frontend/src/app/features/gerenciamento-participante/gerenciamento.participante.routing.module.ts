import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@fepweb/core/auth';
import { GerenciamentoParticipanteContainerComponent } from './containers/gerenciamento-participante-container.component';

export const gerenciamentoParticipantesRotas: Routes = [
  {
    path: '',
    component: GerenciamentoParticipanteContainerComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(gerenciamentoParticipantesRotas)],
  exports: [RouterModule],
})
export class GerenciamentoParticipantesRoutingModule {}
