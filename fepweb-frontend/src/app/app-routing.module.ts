import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rotasApplicacao: Routes = [
  { path: '', redirectTo: '/gerenciar-participantes', pathMatch: 'full' },
  {
    path: 'gerenciar-participantes',
    loadChildren: () =>
      import(
        './features/gerenciamento-participante/gerenciamento-participante.module'
      ).then((m) => m.GerenciamentoParticipanteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rotasApplicacao)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
