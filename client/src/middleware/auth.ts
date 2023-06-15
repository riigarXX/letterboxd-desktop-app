import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { getToken } from '../utils/auth'; // Importa una función para obtener el token JWT almacenado en el cliente

export function isAuthenticated(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  const token = getToken();

  if (token) {
    next();
  } else {
    console.log('volvemos a login')
    next('/');
  }
}
