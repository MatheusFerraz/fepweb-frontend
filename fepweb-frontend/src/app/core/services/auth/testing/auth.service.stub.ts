import { criarProvider } from '@fepweb/shared';
import { AuthService } from '../auth.service';

export const authServiceStub = criarProvider(AuthService, {
  isUsuarioAutenticado(): boolean {
    return false;
  },
});
