import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Aqui haveria a lógica de verificação com o serviço de gerenciamento de token de permissionamento
  public isUsuarioAutenticado(): boolean {
    return true;
  }
}
