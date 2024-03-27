import { Provider } from '@angular/core';

type ClassOf<T> = new (...args: any[]) => T;

export function criarProvider<T>(
  provide: ClassOf<T>,
  obj: Partial<T> = {}
): Provider {
  return { provide, useValue: obj };
}
