import { CanDeactivateFn } from '@angular/router';
import { NosotrosComponent } from '../pages/nosotros/nosotros.component';
export const warningsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const currentComponent = component as NosotrosComponent;

  
  return true;
};
