import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { Auth } from '../servicios/auth';

export const childGuard: CanActivateChildFn = (childRoute, state) => {
  
  const auth = inject(Auth)

  const user = auth.getCurrentUser();

  if(!user && user.view !== "detalle") {
    return false;
  }

  return true;
};
