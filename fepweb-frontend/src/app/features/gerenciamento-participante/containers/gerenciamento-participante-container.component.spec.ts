import { TestBed } from '@angular/core/testing';
import { GerenciamentoParticipanteContainerComponent } from './gerenciamento-participante-container.component';
import { translateServiceStub } from '@fepweb/shared';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('GerenciamentoParticipanteContainerComponent', () => {
  let component: GerenciamentoParticipanteContainerComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GerenciamentoParticipanteContainerComponent,
        translateServiceStub,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{ id: 1 }]),
          },
        },
      ],
    });

    component = TestBed.inject(GerenciamentoParticipanteContainerComponent);
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });
});
