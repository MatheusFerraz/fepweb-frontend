import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-gerenciamento-participante-container',
  templateUrl: './gerenciamento-participante-container.component.html',
  styleUrls: ['./gerenciamento-participante-container.component.scss'],
})
export class GerenciamentoParticipanteContainerComponent
  implements OnInit, OnDestroy
{
  public pageActions: Array<PoPageAction> = [];
  public pageBreadcrumb: PoBreadcrumb;

  private _unsubscribe$ = new Subject<void>();

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.definirPageActions();
    this.definirPageBreadcrumb();
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  private definirPageActions(): void {
    this.pageActions = [];
  }

  private definirPageBreadcrumb(): void {
    this.pageBreadcrumb = {
      items: [
        { label: 'Home', link: '/' },
        {
          label: this.translateService.instant(
            'tituloPagina.gerenciamentoParticipantes'
          ),
        },
      ],
    };
  }
}
