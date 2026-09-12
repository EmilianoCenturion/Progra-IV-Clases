import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { Auth } from '../servicios/auth';

export const roleGuard: CanMatchFn = (route, segments) => {
  const auth = inject(Auth)

  const user = auth.getCurrentUser();

  if (!user || user.role !== "vendedor") {
    return false;
  }
  
  return true;
};
