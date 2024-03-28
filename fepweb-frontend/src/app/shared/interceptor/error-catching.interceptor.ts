import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  PoNotification,
  PoNotificationService,
  PoToasterOrientation,
} from '@po-ui/ng-components';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(
    private translateService: TranslateService,
    private poNotificationService: PoNotificationService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((response) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          errorMessage = this.translateService.instant(
            'label.mensagens.mensagemErroBrowser'
          );
        } else {
          if (error?.error?.errors?.length > 0) {
            errorMessage =
              this.translateService.instant(
                'label.mensagens.mensagemErroLadoServidor'
              ) + `${this.concatenateErrorMessages(error)}`;
          } else {
            errorMessage = this.translateService.instant(
              'label.mensagens.mensagemErroLadoServidor'
            );
          }
        }

        let poNotificationError: PoNotification = {
          message: errorMessage,
          orientation: PoToasterOrientation.Top,
          duration: 3000,
        };

        this.poNotificationService.error(poNotificationError);

        return throwError(error);
      })
    );
  }

  private concatenateErrorMessages(error: HttpErrorResponse): string {
    let concatenatedMessages = '';

    return concatenatedMessages;
  }
}
