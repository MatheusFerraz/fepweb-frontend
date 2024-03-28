import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParticipanteResponse } from '@fepweb/core/models';
import { TranslateService } from '@ngx-translate/core';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-participante-list',
  templateUrl: './participante-list.component.html',
  styleUrls: ['./participante-list.component.scss'],
})
export class ParticipanteListComponent implements OnInit, OnChanges {
  @Input() listaGeralParticipantes: Array<ParticipanteResponse>;

  public form: FormGroup;
  public tableContainer: string;
  public tableIsLoading: boolean;
  public showMoreDisabled: boolean;
  public tableSort: boolean;
  public listaParticipanteTemp: Array<ParticipanteResponse> = [];

  public tableColumns: Array<PoTableColumn> = [];
  public tableActions: Array<PoTableAction> = [];

  constructor(
    private translateService: TranslateService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.inicializarFormularioPesquisa();
    this.definirConfiguracoesTabela();
    this.observarInputSearch();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propriedade in changes) {
      if (propriedade === 'listaGeralParticipantes') {
        this.listaParticipanteTemp = this.listaGeralParticipantes;
      }
    }
  }

  private observarInputSearch(): void {
    this.form.get('inputSearch')?.valueChanges.subscribe((searchKey) => {
      if (searchKey) {
        this.filtrarDados(searchKey);
      } else {
        this.listaParticipanteTemp = this.listaGeralParticipantes;
      }
    });
  }

  private inicializarFormularioPesquisa(): void {
    this.form = this.formBuilder.group({
      inputSearch: null,
    });
  }

  private definirConfiguracoesTabela(): void {
    this.tableContainer = 'shadow';
    this.tableIsLoading = false;
    this.showMoreDisabled = true;
    this.tableSort = false;
    this.definirColunasTabela();
    this.definirAcoesTabela();
  }

  private definirColunasTabela(): void {
    this.tableColumns = [
      {
        property: 'codigoIdentificador',
        width: '10%',
        label: this.translateService.instant(
          'label.gerenciamentoParticipante.codigo'
        ),
      },
      {
        property: 'codigoExterno',
        width: '10%',
        label: this.translateService.instant(
          'label.gerenciamentoParticipante.codigoExterno'
        ),
      },
      {
        property: 'nome',
        width: '30%',
        label: this.translateService.instant(
          'label.gerenciamentoParticipante.nome'
        ),
      },
      {
        property: 'cpf',
        width: '15%',
        label: this.translateService.instant(
          'label.gerenciamentoParticipante.cpfCnpj'
        ),
      },
      {
        property: 'numeroTelefone',
        width: '15%',
        label: this.translateService.instant(
          'label.gerenciamentoParticipante.telefone'
        ),
      },
      {
        property: 'isAssinaEletronicamente',
        type: 'cellTemplate',
        width: '10%',
        label: this.translateService.instant(
          'label.gerenciamentoParticipante.assinaEletronicamente'
        ),
      },
      {
        property: 'isAtivo',
        type: 'cellTemplate',
        width: '10%',
        label: this.translateService.instant(
          'label.gerenciamentoParticipante.status'
        ),
      },
    ];
  }

  private definirAcoesTabela(): void {
    this.tableActions = [
      {
        action: this.onClickEditarParticipante.bind(this),
        icon: 'po-icon-edit',
        label: this.translateService.instant('label.acoesGerais.editar'),
      },
      {
        action: this.onClickExcluirParticipante.bind(this),
        icon: 'po-icon-delete',
        label: this.translateService.instant('label.acoesGerais.excluir'),
      },
    ];
  }

  private onClickExcluirParticipante(participante: ParticipanteResponse): void {
    console.log('On click excluir participante');
  }

  private onClickEditarParticipante(participante: ParticipanteResponse): void {
    console.log('On click editar participante');
  }

  private filtrarDados(searchKey: string): void {}
}
