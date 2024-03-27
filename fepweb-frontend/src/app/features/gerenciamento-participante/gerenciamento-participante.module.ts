import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  PoButtonGroupModule,
  PoButtonModule,
  PoContainerModule,
  PoDividerModule,
  PoFieldModule,
  PoModalModule,
  PoPageModule,
  PoTableModule,
  PoTagModule,
} from '@po-ui/ng-components';
import { GerenciamentoParticipantesRoutingModule } from './gerenciamento.participante.routing.module';
import { GerenciamentoParticipanteContainerComponent } from './containers/gerenciamento-participante-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PoPageModule,
    PoContainerModule,
    PoTableModule,
    PoButtonModule,
    PoButtonGroupModule,
    PoModalModule,
    PoDividerModule,
    PoFieldModule,
    PoTagModule,
    TranslateModule,
    GerenciamentoParticipantesRoutingModule,
  ],
  declarations: [GerenciamentoParticipanteContainerComponent],
})
export class GerenciamentoParticipanteModule {}
