import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private route: Router) {}

  // Aqui também pode ser feita uma verificação do refresh token antes de negar acesso ao usuário
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isUsuarioAutenticado()) {
      return true;
    }

    // Caso o usuário não esteja devidamente autenticado, seria redirecionado para o login
    this.goToLogin();
    return false;
  }

  private goToLogin(): void {
    this.route.navigateByUrl('/auth/login');
  }
}
